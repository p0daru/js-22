import transactions from './data/transactions.js';
import transactionHistory from './data/transactions.js';

const makeTransactionTableRowMarkup = transaction => {
  const { id, amount, date, business, type, name, account } = transaction;

  const trEl = document.createElement('tr');

  const tdEl1 = document.createElement('td');
  tdEl1.textContent = id;

  const tdEl2 = document.createElement('td');
  tdEl2.textContent = amount;

  const tdEl3 = document.createElement('td');
  tdEl3.textContent = date;

  const tdEl4 = document.createElement('td');
  tdEl4.textContent = business;

  const tdEl5 = document.createElement('td');
  tdEl5.textContent = type;

  const tdEl6 = document.createElement('td');
  tdEl6.textContent = name;

  const tdEl7 = document.createElement('td');
  tdEl7.textContent = account;

  trEl.append(tdEl1, tdEl2, tdEl3, tdEl4, tdEl5, tdEl6, tdEl7);

  return trEl;
};

// const makeTransactionTableRows = transactions.map(
//   makeTransactionTableRowMarkup,
// );
// console.log(makeTransactionTableRows);

// const tableEl = document.querySelector('.js-transaction-table');
// console.log(tableEl);

// tableEl.append(...makeTransactionTableRows);

////////
const makeTransactionTableRowMarkup1 = transaction => {
  const { id, amount, date, business, type, name, account } = transaction;

  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>
  `;
};

const makeTransactionTableRows1 = transactionHistory
  .map(makeTransactionTableRowMarkup1)
  .join('');
console.log(makeTransactionTableRows1);

const tableEl1 = document.querySelector('.js-transaction-table');
console.log(tableEl1);

tableEl1.insertAdjacentHTML('beforeend', makeTransactionTableRows1);
