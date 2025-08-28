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
      const div1 = document.createElement("div");
      div1.className =
        "rounded-[8px] px-[18px] py-[16px] my-[16px] flex justify-between items-center bg-gray-100";

      const div2 = document.createElement("div");

      const div3 = document.createElement("div");
      div3.className = "text-xs";
      div3.innerText = time;

      const h3 = document.createElement("h3");
      h3.className = "text-sm font-semibold";
      h3.innerText = serviceName;

      const p = document.createElement("p");
      p.className = "text-[#5c5c5c] font-semibold";
      p.innerText = serviceNum;

      div2.appendChild(h3);
      div2.appendChild(p);
      div1.appendChild(div2);
      div1.appendChild(div3);
      callHistory.appendChild(div1);
      alert(`📞 Calling ${serviceName} ${serviceNum}`);
    } else {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
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
    const card = btn.closest("figure");
    const serviceNum = card.querySelector(`.service-number`).innerText;
    navigator.clipboard.writeText(serviceNum);
    alert(`নম্বর কপি হয়েছে : ${serviceNum}`);
  });
});
