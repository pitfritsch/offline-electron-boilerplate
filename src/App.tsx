import React, { useEffect, useState } from 'react';
import "reflect-metadata";
import { createConnection, getRepository } from 'typeorm';
import './App.css';
import { Contact } from './entities/Contact';
import { Product } from './entities/Product';
import logo from './logo.svg';
import { sendAsync } from './message-control/renderer';
import ConnectionObject from './utils/connectionObject';

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<string>('');

  const [message, setMessage] = useState<string>('');
  const [responses, setResponses] = useState<any[]>([]);

  useEffect(() => {
    createConnection(ConnectionObject).catch(console.error)
  }, [])

  function send(sql: string) {
    sendAsync(sql).then((result: any[]) => {
      console.log({ result })
      setResponses(result)
    });
  }

  async function newProduct() {
    console.log({
      productName,
      productPrice
    })
    
    const product = new Product()
    product.name = productName;
    product.price = Number(productPrice);

    const contact = new Contact()
    contact.first_name = "Daniel"
    contact.last_name = "Bergholz"
    contact.email = "email2"
    contact.phone = "fone2"
    
    getRepository(Product).save(product)

    setProducts(p => [ ...p, product ])
    setProductName("")
    setProductPrice("")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: 'flex' }}>
          <input
            type="text"
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
          />
          <button type="button" onClick={() => send(message)}>
            Send
          </button>
        </div>
        <div>
          {JSON.stringify(responses, null, 2)}
        </div>
      </header>
      <section style={{ padding: "50px 0" }}>
        <input
          type="text"
          value={productName}
          placeholder={"productName"}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          value={productPrice}
          placeholder={"productPrice"}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button onClick={newProduct}>new product</button>
        <hr />
        {products.map((product, index) => 
          <div key={index}>
            <span>{product.name}</span>
            <span>{` ${product.price}`}</span>
            <br />
          </div>
        )}
      </section>
    </div>
  );
}

export default App;