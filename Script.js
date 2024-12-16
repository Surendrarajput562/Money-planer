// script.js

// Update current date and time
function updateDateTime() {
  const dateTime = new Date();
  document.getElementById("current-date-time").textContent = dateTime.toLocaleString();
}
setInterval(updateDateTime, 1000);

// Wallet transaction logic
function handleTransaction() {
  const amount = prompt("Enter amount to deposit or withdraw:");
  if (amount) {
    alert(`₹${amount} processed successfully.`);
  }
}

// Investment logic
function investMoney() {
  const amount = prompt("Enter amount to invest:");
  if (amount) {
    alert(`₹${amount} has been invested to UPI: rajputsurendra562@okaxis`);
  }
}

// Apply for loan
function applyLoan() {
  alert("Chillar loan application is submitted.");
}

// Visit online marketplace
function visitMarketplace() {
  alert("Redirecting to our online store.");
}

// Open bank account
function openBankAccount() {
  alert("Bank account application submitted.");
}

// Apply for credit card
function applyCreditCard() {
  alert("Credit card application submitted.");
}