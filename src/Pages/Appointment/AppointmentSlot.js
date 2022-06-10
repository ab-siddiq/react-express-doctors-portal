import React from "react";

const AppointmentSlot = ({ service, setMakeAppointment }) => {
  const { name, slots } = service;
  return (
    <div className="card w-full outline text-center">
      <div className="card-body ">
        <h2 className="font-bold text-xl text-primary">{service.name}</h2>

        <p>
          {slots.length > 1 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Not available</span>
          )}
        </p>
        <p>
          {slots.length}
          {slots.length > 1 ? " spaces" : " space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="appointment-modal"
            disabled={slots.length === 0}
            onClick={() => setMakeAppointment(service)}
            className="btn uppercase bg-primary text-white"
          >
            book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSlot;
