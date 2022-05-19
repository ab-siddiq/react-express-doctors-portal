import React from "react";

const AppointmentSlot = ({ service, setMakeAppointment }) => {
  const { name, slots } = service;
  return (
    <div class="card w-full outline text-center">
      <div class="card-body ">
        <h2 class="font-bold text-xl text-primary">{service.name}</h2>

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
        <div class="card-actions justify-center">
          <label
            for="appointment-modal"
            disabled={slots.length === 0}
            onClick={() => setMakeAppointment(service)}
            class="btn uppercase bg-primary text-white"
          >
            book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSlot;
