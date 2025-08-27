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
    if (countCoin >= 20) {
      const card = btn.closest("figure");
      const serviceName = card.querySelector(`.service-name`).innerText;
      const serviceNum = card.querySelector(`.service-number`).innerText;
      countCoin = countCoin - 20;
      coin.innerText = countCoin;
      alert(`Calling ${serviceName} : ${serviceNum}`);
    } else {
      alert("Not enough coin");
    }
  });
});
