const button = document.getElementById("tryBtn");

const movement = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRand(window.innerHeight - this.offsetHeight);
    const left = getRand(window.innerWidth - this.offsetWidth);

    movement(this, "left", left).play();
    movement(this, "top", top).play();
  });
});

const getRand = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
