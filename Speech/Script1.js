
let txt = document.getElementById("txt");
let basla = document.getElementById("basla");
let durdur = document.getElementById("durdur");


let speech = new webkitSpeechRecognition();
speech.lang = "tr-TR";
speech.continuous = true;

basla.onclick = () => speech.start();
durdur.onclick = () => speech.stop();


speech.onresult = (event) => {
    let arr = event.results;
    txt.value += arr[arr.length - 1][0].transcript;
};