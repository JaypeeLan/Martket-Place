import React from "react";
import Card from "../card/Card";
import "./services.css";

const Services = () => {
  const services = [
    {
      src: "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "distress sale",
      title:
        "Distress sales but sell without stress. Buy, sell, rent all in one place!! ",
    },
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Rentals",
      title:
        "Not sure if you might still need it and you don't want to keep it? Just rent it out",
    },
    {
      src: "https://images.pexels.com/photos/5717408/pexels-photo-5717408.jpeg?auto=compress&cs=tinysrgb&w=600",
      alt: "property listing",
      title: "View full description and pictures before purchasing",
    },
  ];
  return (
    <section id="services">
      <h2>Convert your properties to cash the fastest way possible</h2>
      <div id="cards">
        {services.map((service) => {
          return (
            <Card src={service.src} alt={service.alt} text={service.title} />
          );
        })}
      </div>
    </section>
  );
};

export default Services;
