import React from 'react';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import Sorting from './components/Sorting/Sorting';
import Ticket from './components/Ticket/Ticket';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Filters />
        <Sorting />
        <section className="tickets">
          <Ticket
            price="13 400"
            duration="21 ч 15 м"
            stops="2"
            departureTime="10:45"
            arrivalTime="08:00"
            origin="MOW"
            destination="HKT"
            airlineLogo="./assets/images/utair6625.logowik.com.webp"
          />
          <Ticket
            price="15 200"
            duration="13 ч 30 м"
            stops="1"
            departureTime="12:30"
            arrivalTime="01:00"
            origin="MOW"
            destination="DXB"
            airlineLogo="./assets/images/utair6625.logowik.com.webp"
          />
        </section>
      </main>
    </div>
  );
};

export default App;