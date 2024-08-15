import { useState } from 'react';
import './App.css';

function App() {
  // State to manage password length
  const [len, setLen] = useState(8);

  // State to manage inclusion of different character types
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  // State to store the generated password
  const [password, setPassword] = useState("");

  // Function to generate the password
  const kishore = () => {
    let characterSet = "";

    // Append character sets based on selected options
    if (upper) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) characterSet += "abcdefghijklmnopqrstuvwxyz";
    if (number) characterSet += "1234567890";
    if (symbol) characterSet += "!@#$%^&*()_-+=";

    // Check if any character set is selected
    if (characterSet === "") {
      alert("Please select at least one character type.");
      return;
    }

    // Generate password
    let generatePass = "";
    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      generatePass += characterSet[randomIndex];
    }
    setPassword(generatePass);
  };

  // Function to copy the password to clipboard
  const copyClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Your Password is Copied");
  };

  return (
    <>
      <div className='password-generator'>
        <h1>Strong Password Generator</h1>

        {/* Input for password length */}
        <div className='input-group'>
          <label htmlFor="num">Password Length:</label>
          <input
            type="number"
            id='num'
            value={len}
            onChange={(e) => setLen(parseInt(e.target.value, 10))}
          />
        </div>

        {/* Checkbox for including uppercase letters */}
        <div className='checkbox-group'>
          <input
            type="checkbox"
            id='upper'
            checked={upper}
            onChange={(e) => setUpper(e.target.checked)}
          />
          <label htmlFor="upper">Include Uppercase</label>
        </div>

        {/* Checkbox for including lowercase letters */}
        <div className='checkbox-group'>
          <input
            type="checkbox"
            id='lower'
            checked={lower}
            onChange={(e) => setLower(e.target.checked)}
          />
          <label htmlFor="lower">Include Lowercase</label>
        </div>

        {/* Checkbox for including numbers */}
        <div className='checkbox-group'>
          <input
            type="checkbox"
            id='numbers'
            checked={number}
            onChange={(e) => setNumber(e.target.checked)}
          />
          <label htmlFor="numbers">Include Numbers</label>
        </div>

        {/* Checkbox for including symbols */}
        <div className='checkbox-group'>
          <input
            type="checkbox"
            id='symbol'
            checked={symbol}
            onChange={(e) => setSymbol(e.target.checked)}
          />
          <label htmlFor="symbol">Include Symbols</label>
        </div>

        {/* Button to generate the password */}
        <button className='generate-btn' onClick={kishore}>Generate Password</button>

        {/* Section to display the generated password and copy button */}
        <div className='generated-password'>
          <input
            type="text"
            readOnly
            value={password}
          />
          <button className='copy-btn' onClick={copyClipboard}>Copy</button>
        </div>
      </div>
    </>
  );
}

export default App;
