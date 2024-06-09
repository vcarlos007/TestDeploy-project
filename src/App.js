import React, { useState } from 'react';
import './App.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [response, setResponse] = useState('');
  const [userInput, setUserInput] = useState('');

  const handleClick1 = () => {
    setClickCount(prevClickCount => prevClickCount + 1);
  };

  const handleClick2 = () => {
    setResponse('Button 2 clicked!');
  };

  const handleClick3 = () => {
    setResponse('Button 3 clicked!');
  };

  const handleInputChange = (event) => {
    const sanitizedInput = event.target.value.replace(/[^a-zA-Z0-9\s]/g, '');
    setUserInput(sanitizedInput);
  };

  // Sample data for the bar graph
  const data = [
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 15 },
    { name: 'D', value: 25 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Visente Carlos Project App</h1>
        <div className="content">
          <h2>Button Click Handlers</h2>
          <div className="stats">
            <p>Click Count: {clickCount}</p>
            <p>{response}</p>
          </div>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter text here"
            className="user-input"
          />
          <p>User Input: {userInput}</p>
          <div className="button-group">
            <button onClick={handleClick1} className="btn">
              Click me!
            </button>
            <button onClick={handleClick2} className="btn">
              Button 2
            </button>
            <button onClick={handleClick3} className="btn">
              Button 3
            </button>
          </div>

          {/* Add the bar graph component */}
          <BarChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
      </header>
    </div>
  );
}

export default App;