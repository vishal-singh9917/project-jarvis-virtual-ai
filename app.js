const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1.3;
    text_speak.pitch = -1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good night Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating optimus");
    speak("initializing")
    speak("Going online");
    wishMe()
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const activationSound = new Audio("nnn.mp3");
recognition.onresult = (event) => {
    activationSound.play();
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    activationSound.play("");
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello') || message.includes('hi')  || message.includes('hi optimus')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine boss how can i help you";
        speech.text = finalText;
    }

    else if(message.includes(' your name')) {
        const finalText = "My name is optimus prime";
        speech.text = finalText;
    }
    
    else if(message.includes('what is my current location')) {
        const finalText = "right now you are in manipal university jaipur bagru";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    
    else if(message.includes('open Youtube')) {
        window.open("https://www.youtube.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('open manipal portal')) {
        window.open("https://mujslcm.jaipur.manipal.edu:122/", "_blank");
        const finalText = "Opening manipal portal";
        speech.text = finalText;
    }

    else if(message.includes('your owner')) {
        const finalText = "vishal and utkarsh ";
        speech.text = finalText;
    }

    else if(message.includes('listen')) {
        const finalText = "yaa telll me boss what can i do for you ";
        speech.text = finalText;
    }

    else if(message.includes('what is our names')) {
        const finalText = "vishal and utkarsh ";
        speech.text = finalText;
    }

    else if(message.includes('laugh')) {
        const finalText = "i can't laugh but i make funny noice like huuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu";
        speech.text = finalText;
    }

    else if(message.includes('joke')) {
        const finalText = "What's an egg's favorite vacation spot? yaa u right it's New Yolk ";
        speech.text = finalText;
    }

    else if(message.includes('open whatsapp')) {
        window.open("https://web.whatsapp.com/", "_blank");
        const finalText = "Opening whatsapp login page u can login now";
        speech.text = finalText;
    }

    else if(message.includes('open facebook')) {
        window.open("https://www.facebook.com/", "_blank");
        const finalText = "Opening facebook login page now you login your account";
        speech.text = finalText;    
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }


    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on internet";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = -1;
    speech.rate = 1.4;

    window.speechSynthesis.speak(speech);
    
}