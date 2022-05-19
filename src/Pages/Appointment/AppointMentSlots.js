import React, { useEffect, useState } from "react";
import AppointmentSlot from "./AppointmentSlot";

const AppointMentSlots = () => {
  const [services, setServices] = useState([]);
  console.log("p", services);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-28 px-12 pt-28">
      {services.map((service) => (
        <AppointmentSlot></AppointmentSlot>
      ))}
    </div>
  );
};

export default AppointMentSlots;
