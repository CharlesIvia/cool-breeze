const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breatheTime = (totalTime / 2) * 2;
const holdTime = totalTime / 5;

breatheAnimation();

let breatheAnimation = () => {
  text.innerText = "Breathe In";
  container.className = "containter-grow";

  setTimeout(() => {
    text.innerText = "Hold Breathe";

    setTimeout(() => {
      text.innerText = "Breathe Out!";
      container.className = "container-shrink";
    }, holdTime);
  }, breatheTime);
};

setInterval(breatheAnimation, totalTime);
