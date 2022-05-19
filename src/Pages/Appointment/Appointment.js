import React, { useState } from "react";
import AppointmentBanner from "./AppointmentBanner";
import AppointMentSlots from "./AppointMentSlots";

const Appointment = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
      <AppointMentSlots date={date}></AppointMentSlots>
    </div>
  );
};

export default Appointment;
