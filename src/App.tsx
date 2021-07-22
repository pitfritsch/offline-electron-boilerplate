import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { sendAsync, sendTeste} from './message-control/renderer';

function App() {

  const [message, setMessage] = useState<string>('');
  const [responses, setResponses] = useState<any[]>([]);

  function send(sql: string) {
    sendAsync(sql).then((result: any[]) => {
      console.log({ result })
      setResponses(result)
    });
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
    </div>
  );
}

export default App;
