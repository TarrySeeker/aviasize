import React from "react";
import "./Ticket.css";

const Ticket = ({ price, flightTime, stops, departureTime, arrivalTime, route, airline }) => {
  return (
    <article className="ticket">
      <div className="ticket__info">
        <p className="ticket__price">{price} Р</p>
        <p className="ticket__details">В пути: {flightTime}</p>
        <p className="ticket__details">Пересадки: {stops}</p>
      </div>
      <div className="ticket__flight">
        <p>{departureTime} - {arrivalTime}</p>
        <p>{route}</p>
      </div>
      <div className="ticket__airline">
        <img
          src={`assets/images/${airline}.webp`}
          alt={airline}
          className="ticket__airline-logo"
        />
      </div>
    </article>
  );
};

export default Ticket;