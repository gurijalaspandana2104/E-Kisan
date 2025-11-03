// API Keys
const weatherAPIKey = "YOUR_API_KEY"; // Replace with your actual API Key

// Language Data
// Language Data
const translations = {
    en: {
      welcome: "Welcome to FarmerHub",
      description: "Empowering farmers through technology",
      sell: "Sell Your Farm Products",
      sellDescription: "Connect directly with buyers and get the best prices for your produce.",
      buy: "Buy Farming Essentials",
      learn: "Learn with Us",
      weather: "Weather Update",
      login: "Login to Your Account",
    },
    hi: {
      welcome: "किसान हब में आपका स्वागत है",
      description: "तकनीक के माध्यम से किसानों को सशक्त बनाना",
      sell: "अपने कृषि उत्पाद बेचें",
      sellDescription: "खरीदारों से सीधे जुड़ें और अपनी उपज के लिए सर्वोत्तम मूल्य प्राप्त करें।",
      buy: "कृषि सामग्री खरीदें",
      learn: "हमारे साथ सीखें",
      weather: "मौसम अपडेट",
      login: "अपने अकाउंट में लॉगिन करें",
    },
    ta: {
      welcome: "ஃபார்மர் ஹப்பிற்கு வரவேற்கிறோம்",
      description: "தொழில்நுட்பத்தின் மூலம் விவசாயிகளை அதிகாரப்படுத்துதல்",
      sell: "உங்கள் விவசாய பொருட்களை விற்கவும்",
      sellDescription: "வாங்குபவர்களுடன் நேரடியாக இணைந்து சிறந்த விலையைப் பெறுங்கள்.",
      buy: "விவசாய அத்தியாவசிய பொருட்கள் வாங்கவும்",
      learn: "எங்களுடன் கற்றுக்கொள்ளுங்கள்",
      weather: "வானிலை புதுப்பிப்பு",
      login: "உங்கள் கணக்கில் உள்நுழையவும்",
    },
    te: {
      welcome: "ఫార్మర్ హబ్‌కు స్వాగతం",
      description: "సాంకేతికత ద్వారా రైతులను శక్తివంతం చేయడం",
      sell: "మీ వ్యవసాయ ఉత్పత్తులను అమ్మండి",
      sellDescription: "కస్టమర్లతో నేరుగా కనెక్ట్ అవ్వండి మరియు ఉత్తమ ధరలు పొందండి.",
      buy: "వ్యవసాయ అవసరాలను కొనండి",
      learn: "మాతో నేర్చుకోండి",
      weather: "వాతావరణ అప్‌డేట్",
      login: "మీ ఖాతాలో లాగిన్ అవ్వండి",
    },
    kn: {
      welcome: "ಫಾರ್ಮರ್ ಹಬ್ ಗೆ ಸ್ವಾಗತ",
      description: "ತಂತ್ರಜ್ಞಾನದ ಮೂಲಕ ರೈತರಿಗೆ ಅಧಿಕಾರ ನೀಡುವುದು",
      sell: "ನಿಮ್ಮ ಕೃಷಿ ಉತ್ಪನ್ನಗಳನ್ನು ಮಾರಾಟ ಮಾಡಿ",
      sellDescription: "ನೇರವಾಗಿ ಖರೀದಿದಾರರೊಂದಿಗೆ ಸಂಪರ್ಕ ಮಾಡಿ ಮತ್ತು ಉತ್ತಮ ಬೆಲೆಗಳನ್ನು ಪಡೆಯಿರಿ.",
      buy: "ಕೃಷಿ ಅಗತ್ಯಗಳನ್ನು ಖರೀದಿಸಿ",
      learn: "ನಮ್ಮೊಂದಿಗೆ ಕಲಿಯಿರಿ",
      weather: "ಹವಾಮಾನ ನವೀಕರಣ",
      login: "ನಿಮ್ಮ ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ",
    },
    ml: {
      welcome: "ഫാർമർ ഹബ്ബിലേക്ക് സ്വാഗതം",
      description: "സാങ്കേതിക വിദ്യയിലൂടെ കർഷകരെ ശക്തിപ്പെടുത്തുക",
      sell: "നിങ്ങളുടെ കാർഷിക ഉൽപ്പന്നങ്ങൾ വിൽക്കുക",
      sellDescription: "കസ്റ്റമർമാരുമായി നേരിട്ട് ബന്ധപ്പെടുക, മികച്ച വിലകൾ നേടുക.",
      buy: "കാർഷിക ആവശ്യങ്ങൾ വാങ്ങുക",
      learn: "ഞങ്ങളോടൊപ്പം പഠിക്കൂ",
      weather: "കാലാവസ്ഥ അപ്ഡേറ്റ്",
      login: "നിങ്ങളുടെ അക്കൗണ്ടിൽ ലോഗിൻ ചെയ്യുക",
    }
  };
  

// Change Language Function
function changeLanguage(lang) {
  const data = translations[lang];
  
  if (!data) {
    console.error("Language data not found");
    return;
  }

  document.querySelector(".hero-content h1").textContent = data.welcome;
  document.querySelector(".hero-content p").textContent = data.description;
  document.querySelector("#sell h2").textContent = data.sell;
  document.querySelector("#sell p").textContent = data.sellDescription;
  document.querySelector("#buy h2").textContent = data.buy;
  document.querySelector("#learn h2").textContent = data.learn;
  document.querySelector("#weather h2").textContent = data.weather;
  document.querySelector("#login h2").textContent = data.login;
}

// Fetch Weather Data using API
function fetchWeather() {
  const city = "New Delhi"; // Set your default city
  if (!weatherAPIKey || weatherAPIKey === "YOUR_API_KEY") {
    console.error("API Key is missing. Please add your API Key.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherAPIKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Weather data not available");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("location").textContent = data.name;
      document.getElementById("temp").textContent = data.main.temp;
      document.getElementById("condition").textContent = data.weather[0].description;
      document.getElementById("humidity").textContent = data.main.humidity;
    })
    .catch(error => {
      console.error("Weather API error:", error);
    });
}

// Chatbot Functionality
const chatbotBtn = document.getElementById("chatbot-btn");
const chatbotContainer = document.getElementById("chatbot");
const chatInput = document.getElementById("chat-input");
const chatContent = document.getElementById("chat-content");

chatbotBtn.addEventListener("click", () => {
  chatbotContainer.classList.toggle("hidden");
});

document.getElementById("send-btn").addEventListener("click", () => {
  const message = chatInput.value.trim();
  if (message) {
    chatContent.innerHTML += `<p>You: ${message}</p>`;
    chatInput.value = "";

    // Basic chatbot response (Simulated)
    setTimeout(() => {
      chatContent.innerHTML += `<p>Chatbot: I'm here to assist you! 😊</p>`;
      chatContent.scrollTop = chatContent.scrollHeight;
    }, 500);
  }
});

// Initial API Call
fetchWeather();
