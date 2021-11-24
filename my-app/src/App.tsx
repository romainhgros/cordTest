import React from 'react';
import './App.css';
import { data } from './Data';
import { ListElement } from './ListElement';

function App() {
  return (
    <div className="App">
      {data.map((dataContent, index) => (
        <ListElement key={index} {...dataContent} />
      ))}
    </div>
  );
}

export default App;
