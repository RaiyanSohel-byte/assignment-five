const heartIcon = document.querySelectorAll(`.heart-icon`);
const heartCount = document.getElementById("heart-count");
const callButton = document.querySelectorAll(`.call-button`);
const coin = document.getElementById("coin-count");
let countHeart = 0;
let countCoin = 100;
//clicking heart icon
heartIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    countHeart++;
    heartCount.innerText = countHeart;
  });
});

//clicking call button
callButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    countCoin = countCoin - 20;
    coin.innerText = countCoin;
    if (countCoin < 20) {
      alert("Not enough coin");
    }
  });
});
