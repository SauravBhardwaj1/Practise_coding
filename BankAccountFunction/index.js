// Create a constructor function for a 'BankAccount' object that has a property for 'balance' and methods for 'deposit' and 'withdraw' that use the 'this' keyword to update the account balance. The 'withdraw' method should also validate that the requested amount is not greater than the account balance and throw an error if it is. Additionally, add a static method called 'getTotalBalance' that uses the 'this' keyword to return the total balance of all Bank Account 


function BankAccount(num){
    this.total = 0
}

BankAccount.prototype.deposit = function(num){
    this.total += num
}

BankAccount.prototype.withdraw = function(num){
    if(num>this.total){
        throw new Error("BankAccount.withdraw")
    }
    this.total -= num
}

BankAccount.prototype.getTotalBalance = function(num){
    return num.reduce(function(totalBalace,num){

        return totalBalance + num.balance
    
    })
}

const account1 = new BankAccount();
account1.deposit(100);
console.log(account1.balance); // Output: 100

const account2 = new BankAccount();
account2.deposit(200);
account2.withdraw(50);
console.log(account2.balance); // Output: 150

const accounts = [account1, account2];
console.log(BankAccount.getTotalBalance(accounts)); // Output: 250