import React, { useEffect, useState } from "react";
import Service from "./Service";

const FeaturedServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services-3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {services.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </div>
  );
};

export default FeaturedServices;
