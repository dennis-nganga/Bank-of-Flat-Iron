import React, { useState, useEffect } from 'react';
import '../App.css'
import Header from '../header ';
import Searchbar from '../searchbar';
import Inputs from '../inputs';
import TransactionTable from '../tableTransactions';

const url ='http://localhost:4000/transactions'

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [transactionsState, setTransactionsState] = useState({
    id: '',
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const HandleTransactionsChange = (e) => {
    setTransactionsState((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value  
    }));
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      });
  }, []);

  const filterTransactions = (inputValue) => {
    if (inputValue === undefined || inputValue === '') {
      setFilteredTransactions(transactions);
      return;
    }
    const filtered = transactions.filter((transaction) => {
      const id = transaction.id;
      return id.includes(inputValue);
    });
    setFilteredTransactions(filtered);
  };

  const handleDelete = (id) => {
    const newTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(newTransactions);
    setFilteredTransactions(newTransactions);
  };

  return (
    <div className='App'>
      <Header />
      <Searchbar filterTransactions={filterTransactions} />
      <Inputs 
        transactionsState={transactionsState}
        HandleTransactionsChange={HandleTransactionsChange}
        setTransactions={setTransactions}
        setFilteredTransactions={setFilteredTransactions}
        transactions={transactions}
        filterTransactions={filterTransactions}
      />
      <TransactionTable transactions={filteredTransactions} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
