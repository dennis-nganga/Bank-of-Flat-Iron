import React from 'react';
import './inputs.css'
function Inputs({
  transactionsState,
  HandleTransactionsChange,
  setTransactions,
  setFilteredTransactions,
  transactions,
  filterTransactions,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: transactions.length + 1,
      date: transactionsState.date,
      description: transactionsState.description,
      category: transactionsState.category,
      amount: transactionsState.amount,
    };
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...transactions, newTransaction]);
  };

  return (
    <div className='Inputs'>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type='date'
            name='date'
            value={transactionsState.date}
            onChange={HandleTransactionsChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type='text'
            name='description'
            value={transactionsState.description}
            onChange={HandleTransactionsChange}
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type='text'
            name='category'
            value={transactionsState.category}
            onChange={HandleTransactionsChange}
          />
        </label>
        <br />
        <label>
          Amount:
          <input
            type='number'
            name='amount'
            value={transactionsState.amount}
            onChange={HandleTransactionsChange}
          />
        </label>
        <br />
        <button type='submit'>Add Transaction</button>
      </form>
    </div>
  );
}

export default Inputs;
