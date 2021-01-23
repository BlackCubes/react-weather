import React from 'react';
// import logo from './logo.svg';
import './App.css';

import WeatherSummary from './WeatherSummary';

import { getWeatherData, unixToDateTime } from './util';

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
      try {
        const { latitude, longitude } = pos.coords;
        const weather = await getWeatherData(latitude, longitude);
        this.setState({
          weather,
          isLoading: false,
        });
      } catch (err) {
        this.setState({ error: err.message, isLoading: false });
      }
    };
    const errorGeo = (err) =>
      this.setState({ error: err.message, isLoading: false });
    navigator.geolocation.getCurrentPosition(successGeo, errorGeo);
  }

  render() {
    const { isLoading, weather, error } = this.state;

    const renderedContent = error ? (
      <>{error}</>
    ) : (
      weather && (
        <>
          {weather.daily.map((prop) => (
            <WeatherSummary
              key={unixToDateTime(prop.dt)}
              dayOfWeek={unixToDateTime(prop.dt).getDay()}
              icon={prop.weather[0].icon}
              highTemp={prop.temp.max}
              lowTemp={prop.temp.min}
            />
          ))}
        </>
      )
    );

    return <div>{isLoading ? <div>Loading...</div> : renderedContent}</div>;
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
