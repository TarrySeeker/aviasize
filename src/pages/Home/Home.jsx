import React from "react";
import "./Home.css";
import Filters from "../../components/Filters/Filters";
import Sorting from "../../components/Sorting/Sorting";
import TicketsList from "../../components/TicketsList/TicketsList";

const Home = () => {
  return (
    <main className="home container">
      <Filters />
      <Sorting />
      <TicketsList />
    </main>
  );
};

export default Home;