const main = document.querySelector("main");
const label = document.querySelector("label");
let counter = 0;
let counterColor = 0;

const btn = document.querySelector("button");

main.addEventListener("click", function () {
  increaseCounter();
});

document.addEventListener("keydown", function (e) {
  if (e.key === " " || e.key === "Enter") {
    increaseCounter();
  }
});

btn.addEventListener("click", function () {
  counter = 0;
  counterColor = 0;
  label.innerText = counter;
  main.style.setProperty("--counterColor", counterColor + "%");
});

function increaseCounter() {
  counter++;
  label.innerText = counter;
  counterColor++;
  if (counterColor === 101) {
    counterColor = 1;
  }
  main.style.setProperty("--counterColor", counterColor + "%");
}
