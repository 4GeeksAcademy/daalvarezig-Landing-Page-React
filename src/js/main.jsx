import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

//Cuenta regresiva
const targetDate = new Date("2025-12-30T11:00:00").getTime();

//Cálculo nueva fecha
const calculate = () => {
  const now = Date.now()
  let dif = targetDate - now;

  if (dif <= 0) {
    return {days: 0, hours: 0, minutes: 0, seconds: 0};
  }

  const difDate = new Date(dif);

  const seconds = difDate.getUTCSeconds();
  const minutes = difDate.getUTCMinutes();
  const hours = difDate.getUTCHours();
  const days = Math.floor(dif / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// Actualización
setInterval (() => {
  const time = calculate ();

  root.render(
    <React.StrictMode>
      <Home
        days={time.days}
        hours={time.hours}
        minutes={time.minutes}
        seconds={time.seconds}
      />
    </React.StrictMode>
  );
},1000);

