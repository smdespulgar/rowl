function hideTyping() {
  document.getElementById("hide").style.display = "none";
}

function showHNY() {
  document.getElementById("hny").style.display = "flex";
}

function hideHNY() {
  document.getElementById("hny").style.display = "none";
}

function hideStackedHNY() {
  // Remove all "HAPPY NEW YEAR" texts
  const hnyTexts = document.querySelectorAll("span");
  hnyTexts.forEach((text) => text.remove());
}

function loopHNY() {
  // Create a new span element for each "HAPPY NEW YEAR"
  const hnySpan = document.createElement("span");
  hnySpan.textContent = "HAPPY NEW YEAR";
  hnySpan.style.position = "fixed"; //
  const fullWidth = window.innerWidth;
  const fullHeight = window.innerHeight;

  // Generate random positions
  const fontSize = Math.random() * 200 + 100;
  const left = Math.random() * (fullWidth - fontSize * 6);
  const top = Math.random() * (fullHeight - fontSize);
  const deg = Math.random() * 60 - 30;

  // Span Styles
  hnySpan.style.left = `${left}px`;
  hnySpan.style.top = `${top}px`;
  hnySpan.style.fontSize = `${fontSize}px`;
  hnySpan.style.transform = `rotate(${deg}deg)`;
  hnySpan.style.color = "#56453f";
  hnySpan.style.fontWeight = "800";
  hnySpan.style.textTransform = "uppercase";
  hnySpan.style.lineHeight = "0.8";
  hnySpan.style.background =
    "linear-gradient(135deg, #5335cf 0%, #de005e 25%, #f66e48 50%, #de005e 75%, #5335cf 100%)";
  hnySpan.style.backgroundSize = "400%";
  hnySpan.style.webkitBackgroundClip = "text";
  hnySpan.style.webkitTextFillColor = "transparent";
  hnySpan.style.animation = "animate 10s linear infinite";
  hnySpan.style.webkitTextStrokeWidth = "1px";
  hnySpan.style.webkitTextStrokeColor = "black";
  hnySpan.style.pointerEvents = "none";

  // Append the span to the body
  document.body.appendChild(hnySpan);
}

function stackHNY() {
  const intervalId = setInterval(loopHNY, 200);

  // Stop stacking after 1 minute
  setTimeout(() => {
    clearInterval(intervalId);
    hideStackedHNY();
    hideHNY();
    setTimeout(() => {
      myMessage();
    }, 3000);
  }, 20000);
}

// Ensure typing text is displayed first
setTimeout(hideTyping, 12100);
setTimeout(() => {
  showHNY();
}, 13000);
setTimeout(() => {
  stackHNY();
}, 18000);

//Message
function myMessage() {
  const wrapper = document.getElementById("wrapperMessage");
  wrapper.style.display = "block";
  const read = document.querySelector(".read");
  const question = document.querySelector(".question");
  const no = document.querySelector(".no");
  const btn_group = document.querySelector(".btn-group");
  const image = document.querySelector(".image");
  const noBtn = document.querySelector(".no-btn");
  const yesBtn = document.querySelector(".yes-btn");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  yesBtn.addEventListener("click", () => {
    read.style.padding = "30px";
    read.style.textAlign = "left";
    read.style.fontSize = "16px";
    read.style.verticalAlign = "middle";
    read.style.alignItems = "center";
    read.justifyContent = "center";
    read.innerHTML =
      "<b>Happy New Year so much!</b><br><br>Thank you for being part of my 2024. Angas ng discord server dahil nakilala kita. Thank you for being by my side (not physically) sa not so okay na part ng buhay ko. I really appreciate you. Thank you for always offering kahit na alam mong hihindi ako. Thank you for stressing dahil sa'kin HAHAHA. I know na ayaw mo maging ganoon pero nag-iisip ka pa rin for me. Thank you for making time noong umuwi ka and for taking care of me nung lasingan time. Thank you for not treating me like a burden or what. Thank you so much, rowl! Sobrang natutuwa talaga akong nakilala ko kayo, ikaw. Kaya maangas pa rin 2024 ko despite ng mga nangyari. I really hope that we'll always be in touch kahit pa magkajowa ka in the future. P'wede mo ko i-block kapag nangyari 'yon. Add mo na lang ako kapag nag-break kayo. Sharot HAHAHAHA. Ayon, hampy new year ser hehe. Sana maging maangas ang bagong taon for us. <br><br><b>L8ter,<br>Shy</b>";
    question.style.display = "none";
    btn_group.style.display = "none";
    image.style.display = "none";
    no.style.display = "none";
  });
  noBtn.addEventListener("mouseover", () => {
    const i =
      Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j =
      Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
  });
}
