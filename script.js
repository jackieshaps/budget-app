//Starting values
let monthlyIncome = 0; 
let expenses = []; //An array of objects
let expenseTotal = 0;
let balance = 0;

//Create references to HTML
let monthlyBudget = document.getElementById("monthly_budget");
let incomeInput = document.getElementById("income_input");
let updateBudgetButton = document.getElementById("update_budget_button");

let nameInput = document.getElementById("name_input");
let amountInput = document.getElementById("amount_input");
let addExpenseButton = document.getElementById("add_expense_button");

let expenseList = document.getElementById("expense_list"); //This is a div
let totalExpenses = document.getElementById("total_expenses");
let remainingBalance = document.getElementById("remaining_balance");

// Build a function that stores and displays the entered budget value

function updateBudget(event) {
    console.log("updateBudget fired.");
    event.preventDefault();
    monthlyIncome = parseInt(incomeInput.value); // Convert income string to a number
    monthlyBudget.innerText= "$" + monthlyIncome;
// TODO: Re-calculate remaining balance 
updateBalance();
}

// Add updateBudget to button
updateBudgetButton.onclick = updateBudget;

//Build a helper function to update the remaining balance
function updateBalance(){
    console.log("updateBalance fired.");
   balance = monthlyIncome - expenseTotal; 
   remainingBalance.innerText = "$" + balance;
   if (balance < 0){
       remainingBalance.classList.add("red");
       remainingBalance.classList.remove("green");
   
   } else {
       remainingBalance.classList.remove("red");
       remainingBalance.classList.add("green");
        
    
   } 
}

 //build a function that adds a new expense to the expense list
 function addExpense(event) {
    console.log("addExpense fired.");
    event.preventDefault();
    let expense = {
        name: nameInput.value, 
        amount: parseInt(amountInput.value) //Convert string to numerical
    };
expenses.push(expense);
console.log(expenses);
let newExpense = document.createElement("p");
newExpense.innerText = expense.name + " $" + expense.amount;
expenseList.appendChild(newExpense);
//TODO: total the expene and display
updateExpenseTotal();
}
//Add addExpense as an onclick handler to the addExpense button
addExpenseButton.onclick = addExpense;

//Build a function which totals the expense 
function updateExpenseTotal() {
    console.log("updateExpenseTotal fired.");
    expenseTotal = 0;
    for (let i=0; i < expenses.length; i++) {
        let currentExpense= expenses[i];
        console.log(currentExpense);
expenseTotal = expenseTotal + currentExpense.amount;
    }
    totalExpenses.innerText = "$" + expenseTotal;
updateBalance();
}

//pop up button?? alert when 0