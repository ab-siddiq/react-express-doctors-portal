import { format } from "date-fns";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from "../../firebase.init";

const MakeAppointmentModal = ({ makeAppointment, date, setMakeAppointment,refetch }) => {
  const {_id,name,slots,price} = makeAppointment;
  const [user] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  const handleAppointmentOnSubmit = (e) => {
    e.preventDefault();
    // const appointmentFor = makeAppointment.name;
    // const date = e.target.date.value;
    const slot = e.target.slot.value;
    // const name = e.target.name.value;
    const phone = e.target.phone.value;
    // const email = e.target.email.value;
   
    const appointment = { 
      appointmentId: _id,
      appointmentFor: name, 
      date: formattedDate,
      slot,
      price,
      phone,
      patient: user.email,
      patientName: user.displayName,
    };

    fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.success){
          toast(`Appointment booked on ${formattedDate} at ${slot}`)
        }else{
          toast.error(`Already an appointment seted on ${data.appointment?.date} at ${data.appointment?.slot}`)
        }
        refetch();
        setMakeAppointment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="appointment-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="appointment-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-primary text-center text-lg mb-4">
            Book {name}
          </h3>
          <form onSubmit={handleAppointmentOnSubmit}>
            <div className="grid gap-5 justify-items-center">
              <input
                type="text"
                name="date"
                placeholder="date"
                value={format(date, "PP")}
                disabled
                className="input input-bordered  w-full max-w-xs"
              />
              <select
                name="slot"
                className="select select-bordered w-full max-w-xs"
              >
                {slots.map((slot) => (
                  <option>{slot}</option>
                ))}
              </select>
              <input
                type="text"
                name="name"
                value={user.displayName}
                disabled
                placeholder="your name"
                className="input input-bordered  w-full max-w-xs"
              />
              <input
                type="email"
                name="email"
                value={user.email}
                disabled
                placeholder="your email"
                className="input input-bordered  w-full max-w-xs"
              />
              <input
                type="text"
                name="phone"
                placeholder="your phone number"
                className="input input-bordered  w-full max-w-xs"
              />
              
              <input
                type="submit"
                value="submit"
                htmlFor="appointment-modal"
                className="input bg-primary  w-full max-w-xs"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointmentModal;
