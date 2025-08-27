const heartIcon = document.querySelectorAll(`.heart-icon`);
const heartCount = document.getElementById("heart-count");
let count = 0;
heartIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    count++;
    heartCount.innerText = count;
  });
});
