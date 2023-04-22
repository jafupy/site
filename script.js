window.addEventListener("scroll", function () {
  let scroll = this.scrollY;
  body = document.querySelector("body");
  const clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num);
  body.style.setProperty("--blur", clamp(scroll / 50, 0, 30) + "px");
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

const Dname = (event) => {
  const original = "Jacob";

  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
      setTimeout(() => {
        let iteration = 0;
        interval = setInterval(() => {
          event.target.innerText = original
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return original[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
          }

          iteration += 1 / 5;
        }, 50);
      }, 2000);
    }

    iteration += 1 / 5;
  }, 50);
};

document.querySelector("h1").onmouseover = Dname;
document.querySelector("h1").addEventListener("click", Dname);
