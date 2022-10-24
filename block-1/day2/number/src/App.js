import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { List } from '../../to-do-list/src/comp';

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <p>{number}</p>
      <button onclick={() => { setNumber(number + 1);
      }} >
        plus
      </button>
    </div>
  )
}
function App() {
  const [number, setNumber] = useState(number);
  return (
    <div>
      <p>{number}</p>
      <button onclick={() => { setNumber(number - 1);
      }} >
        minus
      </button>
    </div>
  )
}

export default App;
