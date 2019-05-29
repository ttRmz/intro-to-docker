import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [response, setResponse] = React.useState(null);
  React.useEffect(() => {
    fetch('http://localhost:8082').then(res => res.json().then(({ title }) => setResponse(title)));
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h3>{response ? `There is the response : ${response}` : '🧐'}</h3>
      </header>
    </div>
  );
}

export default App;
