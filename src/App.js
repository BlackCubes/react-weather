import React from 'react';
import logo from './logo.svg';
import './App.css';

import { getCoordinates } from './util';

function App() {
  const [lat, setLat] = React.useState(false);
  const [lon, setLon] = React.useState(false);

  React.useEffect(() => {
    getCoordinates('Fresno').then((data) => {
      setLat(data.lat);
      setLon(data.lng);
    });
  }, []);

  console.log('lat: ', lat);
  console.log('lon: ', lon);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
