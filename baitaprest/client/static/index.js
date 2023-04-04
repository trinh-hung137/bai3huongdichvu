import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get('/api/check-inventory/', {
      params: {
        name: name,
        quantity: quantity,
      }
    })
    .then((response) => {
      setMessage(response.data.message);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} required />
        </label>
        <br />
        <button type="submit">Check Inventory</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
