window.addEventListener("scroll", function () {
  let scroll = this.scrollY;
  body = document.querySelector("body");
  const clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num);
  body.style.setProperty("--blur", clamp(scroll / 50, 0, 30) + "px");
  console.log(clamp(scroll / 20, 0, 30));
});
