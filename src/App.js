import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { getWeatherData } from './util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      weather: null,
      error: null,
    };
  }

  componentDidMount() {
    const successGeo = async (pos) => {
      const { latitude, longitude } = pos.coords;
      const weather = await getWeatherData(latitude, longitude);
      this.setState({ weather });
      this.setState({ isLoading: false });
    };
    const errorGeo = (err) => this.setState({ error: err.message });
    navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
  }

  render() {
    const { isLoading, weather, error } = this.state;
    return (
      <>
        {isLoading && <div>Loading...</div>}
        {weather && (
          <pre style={{ color: '#ff7f50' }}>{JSON.stringify(weather)}</pre>
        )}
        {error && <div>{error}</div>}
      </>
    );
  }
}

// function App() {
//   const [lat, setLat] = React.useState(false);
//   const [lon, setLon] = React.useState(false);
//   const [weather, setWeather] = React.useState({});

//   React.useEffect(() => {
//     getCoordinates('Fresno').then((data) => {
//       setLat(data.lat);
//       setLon(data.lng);
//     });
//   }, []);

//   React.useEffect(() => {
//     if (lat && lon) getWeatherData(lat, lon).then((data) => setWeather(data));
//   }, [lat, lon]);

//   console.log('lat: ', lat);
//   console.log('lon: ', lon);
//   console.log('weather: ', weather);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p> */}
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
