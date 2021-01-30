import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{process.env.STORE.name}</p>
      </header>
    </div>
  );
}

export default App;
