// Задание 1.1
const account1 = { id: 1, name: 'Alice', balance: 1000 };
const account2 = { id: 2, name: 'Bob', balance: 1500, name: 'Robert' };
const account3 = { id: 3, name: 'Charlie' };

const mergedAccount = merge(account1, account2, account3);
console.log('Merged Account:', mergedAccount);
// Ожидаемый результат:
// { id: 3, name: 'Charlie', balance: 1500 }

// Задание 2.11
const words = ['Добро', 'пожаловать', 'Charlie'];
const welcomeMessage = concatenate(words, ' ');
console.log(welcomeMessage);
// Ожидаемый результат: "Добро пожаловать Charlie"

// Задание 3.1
const transactions1 = [100, 200, 300];
const transactions2 = [50, 400, 150];
const transactions3 = [500, 1000, 50];

const allTransactions = mergeAndSortDesc(transactions1, transactions2, transactions3);
console.log(allTransactions);
// Ожидаемый результат: [1000, 500, 400, 300, 200, 150, 100, 50, 50]
