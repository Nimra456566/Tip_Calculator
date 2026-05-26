// Elements pakdo
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const tipBtns = document.querySelectorAll(".tip-btn");

const outTip = document.getElementById("out-tip");
const outTotal = document.getElementById("out-total");
const outPerson = document.getElementById("out-person");

const billError = document.getElementById("bill-error");
const tipError = document.getElementById("tip-error");
const peopleError = document.getElementById("people-error");

// Jab user type kare
billInput.addEventListener("input", calculate);
tipInput.addEventListener("input", calculate);
peopleInput.addEventListener("input", calculate);

// Tip buttons click
tipBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Active class lagao
    tipBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    // Value set karo
    tipInput.value = btn.dataset.tip;
    calculate();
  });
});
function calculate() {
  // Values lo
  const bill = parseFloat(billInput.value);
  const tip = parseFloat(tipInput.value);
  const people = parseInt(peopleInput.value);

  // Agar koi value nahi toh reset karo
  if (!bill || !people) {
    outTip.textContent = "Rs 0.00";
    outTotal.textContent = "Rs 0.00";
    outPerson.textContent = "Rs 0.00";
    return;
  }

  // Calculate karo
  const tipAmt = bill * ((tip || 0) / 100);
  const grand = bill + tipAmt;
  const perPerson = Math.ceil((grand / people) * 100) / 100;

  // Display karo
  outTip.textContent = `Rs ${tipAmt.toFixed(2)}`;
  outTotal.textContent = `Rs ${grand.toFixed(2)}`;
  outPerson.textContent = `Rs ${perPerson.toFixed(2)}`;
}
function validate() {
  let valid = true;

  // Bill check
  if (billInput.value <= 0 || billInput.value === "") {
    billError.textContent = "Bill must be positive!";
    valid = false;
  } else {
    billError.textContent = "";
  }

  // Tip check
  if (tipInput.value < 0 || tipInput.value > 100) {
    tipError.textContent = "Tip must be 0 to 100!";
    valid = false;
  } else {
    tipError.textContent = "";
  }

  // People check
  if (peopleInput.value < 1 || peopleInput.value === "") {
    peopleError.textContent = "Minimum 1 person!";
    valid = false;
  } else {
    peopleError.textContent = "";
  }

  return valid;
}
document.getElementById("reset-btn").addEventListener("click", () => {
  // Inputs clear karo
  billInput.value = "";
  tipInput.value = "";
  peopleInput.value = "";

  // Buttons se active hato
  tipBtns.forEach((b) => b.classList.remove("active"));

  // Errors clear karo
  billError.textContent = "";
  tipError.textContent = "";
  peopleError.textContent = "";

  // Output reset karo
  outTip.textContent = "Rs 0.00";
  outTotal.textContent = "Rs 0.00";
  outPerson.textContent = "Rs 0.00";
});
