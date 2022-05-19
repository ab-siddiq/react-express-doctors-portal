import React from "react";
import { format } from "date-fns";

const MakeAppointmentModal = ({ makeAppointment, date }) => {
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
            Book > {makeAppointment.name}
          </h3>
          <form>
            <div className="grid gap-5 justify-items-center">
              <input
                type="text"
                placeholder="name"
                value={format(date, "PP")}
                class="input input-bordered  w-full max-w-xs"
              />
              <select class="select select-bordered w-full max-w-xs">
                {makeAppointment.slots.map((slot) => (
                  <option>{slot}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="your name"
                class="input input-bordered  w-full max-w-xs"
              />
              <input
                type="email"
                placeholder="your email"
                class="input input-bordered  w-full max-w-xs"
              />
              <input
                type="text"
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