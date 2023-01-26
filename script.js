window.addEventListener("scroll", function () {
  let scroll = this.scrollY;
  body = document.querySelector("body");
  const clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num);
  body.style.setProperty("--blur", clamp(scroll / 50, 0, 30) + "px");
  console.log(clamp(scroll / 20, 0, 30));
});

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const enhance = (id) => {
  const element = document.getElementById(id),
    text = element.innerText.split("");
  element.innerText = "";

  text.forEach((value, index) => {
    const outer = document.createElement("span");
    outer.className = "outer";

    const inner = document.createElement("span");
    inner.className = "inner";
    inner.style.animationDelay = `${rand(-5000, 0)}ms`;

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.innerText = value;
    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);
    outer.appendChild(inner);
    element.appendChild(outer);
  });
};

enhance("channel-link");

const chonk = () => {
  const chonnky = document.querySelector("#text");
  chonnky.addEventListener("click", () => {
    chonnky.style.toggle("clicked");
  });
};
