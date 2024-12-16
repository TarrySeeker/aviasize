import React from "react";
import Ticket from "../Ticket/Ticket";
import "./TicketsList.css";

const TicketsList = () => {
  const tickets = [
    {
      id: 1,
      price: "13 400",
      flightTime: "21 ч 15 м",
      stops: "2",
      departureTime: "10:45",
      arrivalTime: "08:00",
      route: "MOW - HKT",
      airline: "utair6625.logowik.com",
    },
    {
      id: 2,
      price: "15 200",
      flightTime: "13 ч 30 м",
      stops: "1",
      departureTime: "12:30",
      arrivalTime: "01:00",
      route: "MOW - DXB",
      airline: "utair6625.logowik.com",
    },
    {
      id: 3,
      price: "9 800",
      flightTime: "10 ч 45 м",
      stops: "Без пересадок",
      departureTime: "07:00",
      arrivalTime: "17:45",
      route: "MOW - LED",
      airline: "utair6625.logowik.com",
    },
  ];

  return (
    <section className="tickets-list">
      {tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          price={ticket.price}
          flightTime={ticket.flightTime}
          stops={ticket.stops}
          departureTime={ticket.departureTime}
          arrivalTime={ticket.arrivalTime}
          route={ticket.route}
          airline={ticket.airline}
        />
      ))}
    </section>
  );
};

export default TicketsList;