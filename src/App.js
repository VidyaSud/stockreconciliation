import React, { Component } from 'react';

import './App.css';
import StockReconcil from './container/StocReconcil';

class App extends Component {
  render() { 
    return (
      <div className="App">
       <StockReconcil/>
      </div>
    );
  }
}
export default App;
