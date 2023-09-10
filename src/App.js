import React, { useState } from 'react';

// STYLE
import './Styles/App.scss';

// TRANSACTION DATA
import { data } from './Data/Data';

// COMPONENTS
import TransactionList from './Components/TransactionList';

function App() {

  const [showAll, setShowAll] = useState(true);

  return (
    <div className='App'>

      <div className='header' >
        <p>Last Transactions</p>
        <p
          className='button'
          onClick={() => setShowAll(!showAll)} >
          {showAll ? "See Less" : "See All"}
        </p>
      </div>

      <div className='transactions'>
        {
          data.slice(0, showAll ? data.length : 3).map((user, index) => {
            return (
              <TransactionList key={index} user={user} />
            )
          })
        }
      </div>

    </div>
  );
}

export default App;