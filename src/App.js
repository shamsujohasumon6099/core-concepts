import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const nayoks = ['Anwar', 'Alomgir', 'Jafor', 'Salman']
  const products = [
    { name: 'Photoshop', price: '$90.99' },
    { name: 'Django', price: '$294.99' },
    { name: 'Pycham', price: '$100.99' },
    { name: 'Canva', price: '$60.99' },
    { name: 'Canva', price: '$60.99' },
  ]

  var person = {
    name: 'Shamsujoha',
    job: 'Web Devloper',
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <h3>I am <span> {person.name} </span>and I am a <span> {person.job} </span></h3>

        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <Product product={product}></Product>)
          }
        </ul>


        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        {/* <Person name={nayoks[0]}></Person>
        <Person name={nayoks[1]}></Person>
        <Person name={nayoks[2]}></Person>
        <Person name={nayoks[3]}></Person> */}

      </header>
    </div>
  );
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  },[])

  return (
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ol>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ol>
    </div>
  );
}




function Counter() {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}




function Product(props) {
  const productStyle = {
    border: '2px solid cyan',
    borderRadius: '5px',
    // background: 'black',
    height: '200px',
    padding: '5px 10px',
    width: '200px',
    float: 'left',
    boxShadow: '5px 5px 10px white',
    margin: '5px',
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2><span>{name}</span></h2>
      <h3>{price}</h3>
      <button type="submit">Buy now</button>
    </div>
  );
}



function Person(props) {
  const personStyle = {
    border: '2px solid cyan',
    margin: '5px',
    padding: '5px 20px',
    borderRadius: '5px',
    boxShadow: '2px 2px 10px white',
  }
  return (
    <div style={personStyle}>
      <h3>Nayok: <span> {props.name}</span></h3>
      <p><span>I am Single</span></p>
    </div>

  );
}

export default App;
