import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <section>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <h1 class=" font-bold">Your Appoinment On: {format(date, "PP")}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
