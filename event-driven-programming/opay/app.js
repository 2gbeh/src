/**
 * Event-Driven Programming Pt.3 (OPay)
 *
 * @author Northwind AI <northwindai.org>
 * @date 2026-07-15
 */

document.querySelector("#amount").addEventListener("input", handleAmountInput);

document.querySelector("#clear-btn").addEventListener("click", handleClearBtn);

document.querySelectorAll(".amount-toggle > button").forEach((element) => {
  element.addEventListener("click", handleAmountToggle);
});

document.querySelector("#remark").addEventListener("input", handleRemarkInput);

document.querySelectorAll(".remark-toggle > button").forEach((element) => {
  element.addEventListener("click", handleRemarkToggle);
});
document
  .querySelector("#confirm-btn")
  .addEventListener("click", handleConfirmBtn);

class Transfer {
  constructor() {
    this.amount = 2000;
    this.remark = "Support Northwind AI";
    this.remarkCategory = "Personal";
  }

  get toStrAmount() {
    const locales = "en-NG";
    const options = {
      minimumFractionDigits: 2,
      style: "currency",
      currency: "NGN",
    };
    return new Intl.NumberFormat(locales, options).format(this.amount);
  }

  narration() {
    return `SENT: ${this.toStrAmount} (${this.remarkCategory}) ${this.remark}!`;
  }
}

const transferObj = new Transfer();

function renderAmount(amount) {
  if (amount) {
    const value = Number(amount).toFixed(2);
    transferObj.amount = value;

    document.querySelector("#amount-preview").innerText =
      transferObj.toStrAmount;
    document.querySelector("#amount").value = value;
    document.querySelector("#confirm-btn").removeAttribute("disabled");
  } else {
    document.querySelector("#amount").value = "";
    document.querySelector("#confirm-btn").setAttribute("disabled", true);
  }
}

function handleAmountInput(event) {
  const value = event.target.value.trim();
  renderAmount(value);
}

function handleClearBtn(event) {
  renderAmount("");
}

function handleAmountToggle(event) {
  const value = event.currentTarget.value;
  renderAmount(value);

  document
    .querySelectorAll(".amount-toggle > button")
    .forEach((element) => element.classList.remove("active"));

  event.currentTarget.classList.add("active");
}

function handleRemarkInput(event) {
  const value = event.target.value.trim();
  transferObj.remark = value;
}

function handleRemarkToggle(event) {
  const value = event.currentTarget.innerText;
  transferObj.remarkCategory = value;

  document
    .querySelectorAll(".remark-toggle > button")
    .forEach((element) => element.classList.remove("active"));

  event.currentTarget.classList.add("active");
}

function handleConfirmBtn() {
  if (confirm("Confirm Transfer?")) {
    alert(transferObj.narration());
  }
}
