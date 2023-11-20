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
            <p class="paragraph-style">
              {{ discussion.content_data }}
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <button @click="generateQuestions">Generate Question</button>
            <div class="result">
              <h2>Generated Question:</h2>
              <div id="questionsContainer"></div>
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
      questionsContainer.innerHTML = ''; // Clear previous questions

      for (let i = 1; i <= 5; i++) {
        try {
          const response = await axios.post(
            url,
            {
              model: "gpt-3.5-turbo",
              messages: [
                {
                  role: "system",
                  content: textContents[i - 1].innerText, // Use the appropriate textContent
                },
                {
                  role: "user",
                  content: `Generate question ${i} based on the following text.`,
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
          const questionElement = document.createElement("p");
          questionElement.innerText = `${generatedQuestion}`;
          questionsContainer.appendChild(questionElement);
        } catch (error) {
          console.error(`Error generating question ${i}:`, error);
        }
      }
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
</style>
