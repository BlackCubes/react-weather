import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const WeatherSummary = ({ dayOfWeek, icon, highTemp, lowTemp }) => {
  return (
    <React.Fragment>
      <h1>Day of Week: {dayOfWeek}</h1>
      <img src={icon} placeholder="An icon" />
      <p>High Temp: {highTemp}</p>
      <p>Low Temp: {lowTemp}</p>
    </React.Fragment>
  );
};

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <WeatherSummary
      dayOfWeek="Thursday"
      icon="https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
      highTemp="50 F"
      lowTemp="20 F"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
