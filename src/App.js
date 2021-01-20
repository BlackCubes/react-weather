import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { getCoordinates, getWeatherData } from './util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      weather: '',
      error: '',
    };
  }

  componentDidMount() {
    const successGeo = (pos) => {
      console.log(pos);
      this.setState({ weather: 'something' });
      this.setState({ isLoading: false });
      this.setState({ error: 'none' });
    };
    const errorGeo = (err) => console.log(err);
    navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
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
