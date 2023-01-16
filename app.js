let n = Number(prompt("Enter the number"));
let index = 1;
let container = document.getElementById("container");
let interval = setInterval(() => {
  let line = document.createElement("div");
  line.classList.add("line");
  if (index % 2 === 0) {
    line.classList.add("right");
  } else {
    line.classList.add("left");
  }
  line.style.transform = `translate(-50%, -${index * 40}px)`;
  line.innerText = index;
  document.querySelector(".right") &&
    document.querySelector(".right").classList.remove("right");
  document.querySelector(".left") &&
    document.querySelector(".left").classList.remove("left");
  container.append(line);
  if (index > n) {
    clearInterval(interval);
  }
  index++;
}, 500);
