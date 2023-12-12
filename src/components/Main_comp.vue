<template>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>{{ topicName }}</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/Home">Home</a></li>
          <li class="breadcrumb-item">Subjects</li>
          <li class="breadcrumb-item active">{{ topicName }}</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div v-for="discussion in discussions" :key="discussion.discussion_id" class="card">
          <div class="card-body">
            <h5 class="card-title">{{ discussion.content_title }}</h5>
            <img v-if="discussion.content_image" :src="discussion.content_image" alt="Discussion Image" :style="{ 'max-width': '500px', 'max-height': '300px', 'object-fit': 'cover' }" />
            <p class="paragraph-style">
              {{ discussion.content_data }}
              <br>
              <iframe
                v-if="isValidURL(discussion.content_link)"
                :src="convertToEmbedLink(discussion.content_link)"
                height="300"
                width="500"
                title="{{ discussion.content_title }}"
                allowfullscreen></iframe>
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <button @click="generateQuestions" class="generate-question-btn" >Generate Question</button>
            <div class="result">
              <h2>Generated Question:</h2>
              <div id="questionsContainer" class="question-container"></div>
              <h2>Generated Answers:</h2>
              <div id="answersContainer" class="answer-container"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="progress-container">
        <div id="progress-bar" class="progress" style="height: 5px;">
          <div id="progress" class="progress-bar" role="progressbar" style="width: 0%;"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';

export default {
  data() {
    return {
      topicName: '',
      discussions: [],
    };
  },

  mounted() {
    const topicId = this.$route.params.topicId;
    this.getTopicData(topicId);
    this.jqueryLoaded();
  },

  methods: {
    //for link
    isValidURL(url) {
      // Your existing URL validation logic
      // You can use a library like 'valid-url' for more robust URL validation
      return /^https?:\/\/(www\.)?youtube\.com\/watch\?/.test(url);
    },
    convertToEmbedLink(url) {
      if (this.isValidURL(url)) {
        // Replace "watch?v=" with "embed/"
        return url.replace(/watch\?v=/, 'embed/');
      } else {
        return '';
      }
    },

    async getTopicData(topicId) {
      try {
        const response = await axios.get(`topics/${topicId}`);
        this.topicName = response.data.topic_name;
        this.discussions = response.data.discussions;

        // Using $nextTick to ensure DOM is updated before manipulating it
        this.$nextTick(() => {
          this.jqueryLoaded();
        });
      } catch (error) {
        console.error('Error fetching topic data:', error);
      }
    },

    jqueryLoaded() {
      $(document).ready(() => {
        $(window).on('scroll', () => {
          const scrollWin = $(window).scrollTop();
          const docHeight = $(document).height();
          const winHeight = $(window).height();
          const scrolled = (scrollWin / (docHeight - winHeight)) * 100;
          $('#progress').css('width', scrolled + '%');
        });
      });
    },

    async generateQuestions() {
      const textContents = document.querySelectorAll(".paragraph-style");
      const apiKey = "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"; // Replace with your actual OpenAI API key
      const url = `https://api.openai.com/v1/chat/completions`;

      const questionsContainer = document.getElementById("questionsContainer");
      const answersContainer = document.getElementById("answersContainer");

      questionsContainer.innerHTML = ''; // Clear previous questions
      answersContainer.innerHTML = ''; // Clear previous answers

      try {
        const response = await axios.post(
          url,
          {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: textContents[0].innerText, // Use the appropriate textContent
              },
              {
                role: "user",
                content: `Generate a question based on the following text.`,
              },
            ],
            max_tokens: 100,
            temperature: 0.7,
            top_p: 1,
            n: 1,
            stop: ["\n"],
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );

        const generatedQuestion = response.data.choices[0].message.content.trim();
        const correctAnswer = generatedQuestion;
        const questionElement = document.createElement("p");
        questionElement.innerText = `${generatedQuestion}`;
        questionsContainer.appendChild(questionElement);

        // Generate correct and wrong answers based on the question
        await this.generateCorrectAndWrongAnswers(generatedQuestion, correctAnswer);
      } catch (error) {
        console.error(`Error generating question:`, error);
      }
    },

    async generateCorrectAndWrongAnswers(question, correctAnswer) {
      const apiKey = "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"; // Replace with your actual OpenAI API key
      const url = `https://api.openai.com/v1/chat/completions`;

      const answersContainer = document.getElementById("answersContainer");

      try {
        const response = await axios.post(
          url,
          {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "user",
                content: question,
              },
              {
                role: "assistant",
                content: "Generate a correct answer to the following question:",
              },
              {
                role: "assistant",
                content: "Generate an incorrect answer to the following question:",
              },
            ],
            max_tokens: 100,
            temperature: 0.7,
            top_p: 1,
            n: 2,
            stop: ["\n"],
          },
          {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
          }
        );

        // Extract both correct and wrong answers from the response
        const generatedCorrectAnswer = response.data.choices[0].message.content.trim();
        const generatedWrongAnswer = response.data.choices[1].message.content.trim();

        // Create buttons for correct and wrong answers
        const correctButton = this.createAnswerButton(generatedCorrectAnswer, true);
        const wrongButton = this.createAnswerButton(generatedWrongAnswer, false);

        // Shuffle and append the buttons
        const shuffledButtons = this.shuffleButtons([correctButton, wrongButton]);
        shuffledButtons.forEach(button => {
          answersContainer.appendChild(button);
        });
      } catch (error) {
        console.error(`Error generating correct and wrong answers:`, error);
      }
    },

    createAnswerButton(answer, isCorrect) {
      const buttonElement = document.createElement("button");
      buttonElement.innerText = `${answer}`;
      buttonElement.onclick = () => {
        this.checkAnswer(isCorrect, buttonElement);
      };

      return buttonElement;
    },

    checkAnswer(isCorrect, buttonElement) {
      const answersContainer = document.getElementById("answersContainer");

      // Apply styles for both correct and wrong answers
      if (isCorrect) {
        buttonElement.className = "correct";
      } else {
        buttonElement.className = "wrong";
        // Find the correct button and apply the correct style
        const correctButton = answersContainer.querySelector(".correct");
        if (correctButton) {
          correctButton.className = "correct";
        }
      }

      // Disable all buttons after the user clicks
      answersContainer.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;
      });
    },

    shuffleButtons(buttons) {
      // Fisher-Yates shuffle algorithm
      for (let i = buttons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
      }
      return buttons;
    },
  },
};
</script>

<style>
#progress-container {
  position: fixed;
  bottom: 10px;
  width: 100%;
  z-index: 1030;
}

.paragraph-style {
  white-space: pre-line;
}

.generate-question-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 12px 0px;

}

.generate-question-btn:hover {
  background-color: #0056b3;
}

.question-container {
  margin: 10px 0px;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.question {
  margin-bottom: 10px;
}

.answer-container {
  margin: 10px 0px;
  background-color: #eaeaea;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex; /* You can use flex or grid depending on your layout needs */
  justify-content: space-between; /* This adds equal space between the elements */
  
}

.button {
  display: inline-block;
  margin-bottom: 15px;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #0056b3;
}


.correct {
  background-color: green;
  color: white;
  border: 2px solid #0b4b0e;
  margin: 5px;
  padding: 10px;
  border-radius: 8px;
}

.wrong {
  background-color: red;
  color: white;
  border: 2px solid #4d0808;
  margin: 5px;
  padding: 10px;
  border-radius: 8px;
}




</style>
