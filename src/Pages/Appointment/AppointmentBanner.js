import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
