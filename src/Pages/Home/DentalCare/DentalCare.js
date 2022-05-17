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
    <div class="card lg:card-side bg-base-100 shadow-xl mt-28">
      <div className="flex content-center">
        <figure>
          <img src={care.img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{care.title}</h2>
          <p>{care.description}</p>
          <div class="card-actions ">
            <button class="btn btn-primary">{care.ctaText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
