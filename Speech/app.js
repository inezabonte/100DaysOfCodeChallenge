const readTxt = document.querySelector(".read").textContent;

let msg = new SpeechSynthesisUtterance();
let voices = window.speechSynthesis.getVoices();
msg.voice = voices[10];
msg.volume = 1;
msg.rate = 0.1;
msg.pitch = 2;
msg.text = readTxt;
msg.lang = 'fr';
speechSynthesis.speak(msg);
