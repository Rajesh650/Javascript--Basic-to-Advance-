let account_1 = {
  accName: "Satish Kumar",
  transactions: [100, 400, -500, 700, -100, 200],
  pin: 1234
};

let account_2 = {
  accName: "Rajesh Singh",
  transactions: [500, -200, 400, -500, 800],
  pin: 2345
};

let account_3 = {
  accName: "Sita Rama Raju",
  transactions: [100, 200, 900, -200, -300],
  pin: 3456
};

let account_4 = {
  accName: "Chushak Chowdary",
  transactions: [400, -100, 200, 300, -300],
  pin: 4567
};

let accounts = [account_1, account_2, account_3, account_4];

function createUserNames(accs) {
  accs.forEach(function(acc) {
    acc.username = acc.accName.toLowerCase().split(' ').map(function(name) {
      return name[0];
    }).join('');
  });
}

createUserNames(accounts);

// Login Module
let logInForm = document.getElementById('login-form');
let usnEl = document.getElementById('usn');
let pinEl = document.getElementById('pin');

let currentAcc;
let logoutTimer;
let countdownInterval;

logInForm.addEventListener('submit', function(e) {
  e.preventDefault();

  let username = usnEl.value;
  let pin = Number(pinEl.value);

  // Finding Current Account
  currentAcc = accounts.find(function(acc) {
    return acc.username === username;
  });

  if (currentAcc && currentAcc.pin === pin) {
    // Display User message
    let msgEl = document.getElementById('user-message');
    msgEl.innerText = `Welcome Back, ${currentAcc.accName.split(" ")[0]} 😊`;
    msgEl.style.color = "limegreen";

    // Display Buttons Section
    document.getElementById('btn-section').style.display = 'block';

        // // Start Logout Timer
        // startLogoutTimerlogoutTimer();

    // Display All Transactions
    let all_btn = document.getElementById('all-transactions');
    all_btn.addEventListener('click', function() {
      document.getElementById('transactions-section').style.display = 'block';
      displayTransactions(currentAcc.transactions);
    });

    // Display Total Balance
    let balanceBtn = document.getElementById('Balance-btn');
    balanceBtn.addEventListener('click', function() {
      displayTotalBalance(currentAcc.transactions);
    });

    // Display Deposits
    let depositsBtn = document.getElementById('deposits-btn');
    depositsBtn.addEventListener('click', function() {
      displayDeposits(currentAcc.transactions);
    });

    // Display Withdrawals
    let withdrawalsBtn = document.getElementById('withdrawls-btn');
    withdrawalsBtn.addEventListener('click', function() {
      displayWithdrawals(currentAcc.transactions);
    });
  }
  usnEl.value = pinEl.value = '';
});

function startLogoutTimer() {
  let timerEl = document.getElementById('timer');
  let time = 180; // 3 minutes in seconds

  logoutTimer = setTimeout(logoutUser, time * 1000);

  countdownInterval = setInterval(function() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerEl.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    time--;

    if (time < 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);
}

function logoutUser() {
  // Log out the user and reset the timer
  currentAcc = null;
  document.getElementById('user-message').innerText = 'Log In To Get Started!!!!!';
  document.getElementById('user-message').style.color = 'black';
  document.getElementById('btn-section').style.display = 'none';
  document.getElementById('transactions-section').style.display = 'none';
  document.getElementById('timer').innerText = '03:00';
  clearInterval(countdownInterval);
}

// Display All Transactions
function displayTransactions(transactions) {
  if (transactions.length != 0) {
    let eachTrans = ``;
    transactions.forEach(function(amt, i) {
      let transacType = amt > 0 ? "Deposit" : "Withdrawal";
      let transacColor = amt > 0 ? "success" : "danger";

      eachTrans += `<li class="list-group-item">
                      <button type="button" class="btn btn-${transacColor}">
                          ${transacType} <span class="badge text-bg-secondary">${i + 1}</span>
                      </button>
                      <span class="float-end">${amt}</span>
                    </li>`;
    });
    document.getElementById("display-transactions").innerHTML = eachTrans;
  }
}

// Display Total Balance
function displayTotalBalance(transactions) {
  let balance = transactions.reduce((acc, amt) => acc + amt, 0);
  alert(`Total Balance: ${balance}`);
}

// Display Deposits
function displayDeposits(transactions) {
  let deposits = transactions.filter(function(amt) {
    return amt > 0;
  });
  displayTransactions(deposits);
}

// Display Withdrawals
function displayWithdrawals(transactions) {
  let withdrawals = transactions.filter(function(amt) {
    return amt < 0;
  });
  displayTransactions(withdrawals);
}

