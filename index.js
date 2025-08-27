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
const callHistory = document.getElementById("call-history");
callButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (countCoin >= 20) {
      const card = btn.closest("figure");
      const serviceName = card.querySelector(`.service-name`).innerText;
      const serviceNum = card.querySelector(`.service-number`).innerText;
      countCoin = countCoin - 20;
      coin.innerText = countCoin;
      const time = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      callHistory.innerHTML += ` <div
          class="rounded-[8px] px-[18px] py-[16px] my-[16px] flex justify-between items-center bg-gray-100"
        >
          <div>
            <h3 class="text-sm font-semibold">${serviceName}</h3>
            <p class="text-[#5c5c5c] font-semibold">${serviceNum}</p>
          </div>
          <div class="text-xs">${time}</div>
        </div>`;
      alert(`Calling ${serviceName} : ${serviceNum}`);
    } else {
      alert("Not enough coin");
    }
  });
});

//clicking clear button
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", () => {
  callHistory.innerHTML = "";
});

//clicking copy button
let copyCount = 0;
const copyButton = document.querySelectorAll(`.copy-button`);
copyButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    const copyNum = document.getElementById("copy-number");
    copyCount++;
    copyNum.innerText = `${copyCount} Copy`;
  });
});
