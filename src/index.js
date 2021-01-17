import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import '../public/css/style.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import WeatherDetails from './WeatherSummary';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <main>
      <WeatherDetails
        location="Fresno"
        dayOfWeek="Sunday"
        weatherCondition="Light rain"
        icon="cloud-sun-rain"
        highTemp={50}
        lowTemp={20}
        precipitation={10}
        humidity={64}
        windSpeed={6}
      />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
