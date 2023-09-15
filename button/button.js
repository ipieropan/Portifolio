const button = document.getElementById("tryBtn"); // const that represents the button in the html code

// all the button's movment animation
const movement = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

  // when mouserover the button it makes it change position
["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRand(window.innerHeight - this.offsetHeight); // changes the button to a random position
    const left = getRand(window.innerWidth - this.offsetWidth);

    movement(this, "left", left).play();
    movement(this, "top", top).play();
  });
});

const getRand = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
