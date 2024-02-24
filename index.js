// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

function setColor(count) {
  if (count === 0) {
    countLabel.style.color = "hsl(220, 100%, 60%)";
  } else if (count > 0) {
    countLabel.style.color = "green";
  } else {
    countLabel.style.color = "red";
  }
}

increaseBtn.addEventListener("click", () => {
  count++;
  countLabel.textContent = count;
  setColor(count);
});

decreaseBtn.addEventListener("click", () => {
  count--;
  countLabel.textContent = count;
  setColor(count);
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countLabel.textContent = count;
  setColor(count);
});
