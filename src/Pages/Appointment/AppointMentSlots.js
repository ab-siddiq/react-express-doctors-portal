import React, { useEffect, useState } from "react";
import AppointmentSlot from "./AppointmentSlot";
import { format } from "date-fns";
import MakeAppointmentModal from "./MakeAppointmentModal";

const AppointMentSlots = ({ date }) => {
  const [services, setServices] = useState([]);
  const [makeAppointment, setMakeAppointment] = useState(null);
  console.log("p", {makeAppointment});
  const formattedDate = format(date, "PP");
  useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setServices(data);
      });
  }, []);
  return (
    <div className="px-12 pt-28">
      <h1 className=" font-bold text-center mb-10">
        Available Appointment On: {format(date, "PP")}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-28 ">
        {services.map((service) => (
          <AppointmentSlot
            key={service._id}
            service={service}
            setMakeAppointment={setMakeAppointment}
          ></AppointmentSlot>
        ))}
      </div>
      {makeAppointment && (
        <MakeAppointmentModal
        key={makeAppointment._id}
          makeAppointment={makeAppointment}
          date={date}
          setMakeAppointment={setMakeAppointment}
        ></MakeAppointmentModal>
      )}
    </div>
  );
};

export default AppointMentSlots;
