import React from "react";
import { format } from "date-fns";

const MakeAppointmentModal = ({ makeAppointment, date }) => {
  const handleAppointmentOnSubmit = (e) => {
    e.preventDefault();
    const appointmentFor = makeAppointment.name;
    const date = e.target.date.value;
    const slot = e.target.slot.value;
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    console.log(appointmentFor, date, slot, name, phone, email);
    const appointment = { appointmentFor, date, slot, name, phone, email };
    fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <input type="checkbox" id="appointment-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="appointment-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-primary text-center text-lg mb-4">
            Book {makeAppointment.name}
          </h3>
          <form onSubmit={handleAppointmentOnSubmit}>
            <div className="grid gap-5 justify-items-center">
              <input
                type="text"
                name="date"
                placeholder="date"
                value={format(date, "PP")}
                class="input input-bordered  w-full max-w-xs"
              />
              <select
                name="slot"
                class="select select-bordered w-full max-w-xs"
              >
                {makeAppointment.slots.map((slot) => (
                  <option>{slot}</option>
                ))}
              </select>
              <input
                type="text"
                name="name"
                placeholder="your name"
                class="input input-bordered  w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                placeholder="your email"
                class="input input-bordered  w-full max-w-xs"
              />
              <input
                type="text"
                name="phone"
                placeholder="your phone number"
                class="input input-bordered  w-full max-w-xs"
              />
              <input
                type="submit"
                value="submit"
                class="input bg-primary  w-full max-w-xs"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointmentModal;
