const texts = document.querySelector(".texts");
const foc1 = document.getElementById("focu1");
const foc2 = document.getElementById("focu2");
const foc3 = document.getElementById("focu3");
const foc4 = document.getElementById("focu4");
const foc5 = document.getElementById("focu5");

  window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
  console.log(text);
  if (e.results[0].isFinal) {
    if (text.includes("prender foco 1") || text.includes("prender foco 1")) {
      foc1.style.background="url(bulb_on.jpg)";
    }
    if (text.includes("Apagar foco 1") || text.includes("Apagar foco 1")) {
      foc1.style.background="url(bulb_off.jpg)";
    }
    if (text.includes("prender foco 2") || text.includes("prender foco 2")) {
      foc2.style.background="url(bulb_on.jpg)";
    }
    if (text.includes("Apagar foco 2") || text.includes("Apagar foco 2")) {
      foc2.style.background="url(bulb_off.jpg)";
    }
    if (text.includes("prender foco 3") || text.includes("prender foco 3")) {
      foc3.style.background="url(bulb_on.jpg)";
    }
    if (text.includes("Apagar foco 3") || text.includes("Apagar foco 3")) {
      foc3.style.background="url(bulb_off.jpg)";
    }
    if (text.includes("prender foco 4") || text.includes("prender foco 4")) {
      foc4.style.background="url(bulb_on.jpg)";
    }
    if (text.includes("Apagar foco 4") || text.includes("Apagar foco 4")) {
      foc4.style.background="url(bulb_off.jpg)";
    }
    if (text.includes("prender foco 5") || text.includes("prender foco 5")) {
      foc5.style.background="url(bulb_on.jpg)";
    }
    if (text.includes("Apagar foco 5") || text.includes("Apagar foco 5")) {
      foc5.style.background="url(bulb_off.jpg)";
    }
  }
    //p = document.createElement("p");
});

  recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();