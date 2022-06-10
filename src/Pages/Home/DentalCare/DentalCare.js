import React from "react";
import treatment from "../../assets/images/treatment.png";

const DentalCare = () => {
  const care = {
    _id: 1,
    title: "Exceptional Dental Care, on Your Terms",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page",
    ctaText: "GET STARTED",
    img: treatment,
  };
  return (
    <div className="flex justify-center lg:card-side bg-base-100  mt-28 ">
      <div className="card grid md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1  gap-10  lg:w-1/2 sm:w-full content-center">
        <div className="">
          <figure>
            <img src={care.img} className="h-auto w-96 rounded" alt="Album" />
          </figure>
        </div>
        <div className=" w-full grid content-center ">
          <div>
            <h2 className="card-title text-5xl mb-5">{care.title}</h2>
            <p>{care.description}</p>
            <div className="card-actions mt-5">
              <button className="btn btn-primary">{care.ctaText}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
