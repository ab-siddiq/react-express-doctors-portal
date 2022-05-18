import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

const MakeAppointment = () => {
  return (
    <section
      className="flex justify-center items-center mt-28 "
      style={{ background: `url(${appointment})` }}
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} />
      </div>
      <div className="flex-1 m-10">
        <h3 className="text-primary text-xl font-bold">Appointment</h3>
        <h2 className="text-xl text-white my-3 font-bold">
          Make an appointment today
        </h2>
        <p className="text-white ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div class="card-actions mt-5">
          <button class="btn btn-primary uppercase">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
