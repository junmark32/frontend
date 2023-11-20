function generateQuestions() {
    const textContents = document.querySelectorAll("#textContent");
    const apiKey = "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"; // Replace with your actual OpenAI API key
    const url = `https://api.openai.com/v1/chat/completions`;

    const questionsContainer = document.getElementById("questionsContainer");
    questionsContainer.innerHTML = ''; // Clear previous questions

    for (let i = 1; i <= 5; i++) {
        axios
            .post(
                url,
                {
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: textContents[i - 1].innerText // Use the appropriate textContent
                        },
                        {
                            role: "user",
                            content: `Generate question ${i} based on the following text.`
                        }
                    ],
                    max_tokens: 100,
                    temperature: 0.7,
                    top_p: 1,
                    n: 1,
                    stop: ["\n"]
                },
                {
                    headers: {
                        Authorization: `Bearer ${apiKey}`,
                        "Content-Type": "application/json"
                    }
                }
            )
            .then((response) => {
                const generatedQuestion = response.data.choices[0].message.content.trim();
                const questionElement = document.createElement("p");
                questionElement.innerText = `${generatedQuestion}`;
                questionsContainer.appendChild(questionElement);
            })
            .catch((error) => {
                console.error(`Error generating question ${i}:`, error);
            });
    }
}