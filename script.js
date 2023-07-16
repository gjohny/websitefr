function sendEmail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };


const serviceID = "service_p1j4v4k";
const templateID = "template_ulmqdd8";

emailjs.send(serviceID, templateID, params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Message sent");
    }
)
.catch((err) => console.log(err));
}

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

const promptInput = document.getElementById("promptInput");
const generateBtn = document.getElementById("generateBtn");
const stopBtn = document.getElementById("stopBtn");
const resultText = document.getElementById("resultText");

  const generate = async () => {

    try {
      // Fetch the response from the OpenAI API with the signal from AbortController
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: promptInput.value }],
        }),
      });
  
      const data = await response.json();
      resultText.innerText = data.choices[0].message.content;
    } catch (error) {
      console.error("Error:", error);
      resultText.innerText = "Error occurred while generating.";
    }
  };

  generateBtn.addEventListener("click", generate);

  promptInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      generate();
    }
  });