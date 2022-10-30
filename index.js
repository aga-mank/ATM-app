// ---- ENGLISH VERSION -----
// ---- JS ATM ---
// interaction possible via console (developer tools) and prompt windows

// user's data
const usersPIN = '0055';
let accountsBalance = 1000;

//currency rate
const currencyRateEuro = 4.7;

const displayMenu = () => {
    console.log('MENU:')
    console.log('1 - > Display currently available balance');
    console.log('2 - > Deposit');
    console.log('3 - > Withdraw');
    console.log('4 - > Display currently available balance in EUR');
    console.log('5 - > Quit');
}

const displayBalance = () => {
    console.log(`Current account's balance: ${accountsBalance} PLN`);
}

const convertBalanceToEUR = (balance) => {
    return Math.round(balance * 100 / currencyRateEuro) / 100
}

const displayBalanceInEUR = () => {
    console.log(`Current account's balance in EUR: ${convertBalanceToEUR(accountsBalance)}`);
}

const deposit = () => {
    const amount = Number(prompt('Enter amount you want to deposit:'))
    console.log(amount);
    const MIN_DEPOSIT_AMOUNT = 0;
    if (amount < MIN_DEPOSIT_AMOUNT) {
        console.error('Negative value, transaction not possible.')
    }
    else if (amount == 0) {
        console.log(`You entered 0. No money will be deposited`)
    }
    else if (amount > 0) {
        accountsBalance = accountsBalance + amount
        console.log(`You deposited ${amount} PLN. Current balance is ${accountsBalance} PLN`)
    }
    else {
        console.log('not a number');
        //Nan?
    }
}

const withdraw = () => {
    if (amount < 0) {
        console.error('Negative value, transaction not possible.')
    }
    if (amount > accountsBalance) {
        console.error('Your balance is too low to withdraw requested amount.')
    }
    const amount = Number(prompt('Enter amount you want to withdraw:'))
    if (amount >= 0 & amount <= accountsBalance) {
        accountsBalance = accountsBalance - amount
        console.log(`You paid out ${amount} PLN. Current balance is ${accountsBalance} PLN`)
    }
}

// MENU navigation

const navigate = () => {

    let menuInput;

    while (menuInput != '5') {
        displayMenu();
        menuInput = prompt('Please enter selected Menu option');
        switch (menuInput) {
            case '1':
                displayBalance();
                break
            case '2':
                console.warn('Deposit...');
                deposit();
                break
            case '3':
                console.warn('Withdrawal...');
                withdraw();
                break
            case '4':
                displayBalanceInEUR();
                break
            case '5':
                console.log('Thank you for your visit, we wish you a nice day!')
                break
            default:
                console.log('Please enter 1 to 5 number to choose one of the available Menu options')
        }
    }
}

//validating PIN number, executing navigation
const runATM = (inputPin) => {

    alert('Open the developer tools to use the ATM app');

    console.log ('---- ATM ----')

    setTimeout (() => {
        for (i = 1; i <= 3; i++) {
            inputPin = prompt('Enter your PIN')
            if (inputPin == usersPIN) {
                navigate();
                i = 0;
            } else {
                console.warn(`Incorrect PIN, please try again. ${3 - i} attempts left`)
            }
        }
        console.error('Authentication failed. You entered wrong PIN 3 times. Your account is blocked, no transactions are currently available.');
    }, 4000 )
}

//executing ATM function
runATM();
