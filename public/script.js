let button = document.getElementById("btn");

button.addEventListener("mousemove", (e) => {
  x = e.offsetX;
  console.log(x);
  y = e.offsetY;
  button.style.setProperty("--mouse-x", x + "px");
  button.style.setProperty("--mouse-y", y + "px");
});
