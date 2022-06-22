import React from "react";

const InfoCard = ({ info }) => {
  const { title, description, img, color } = info;
  // console.log(info);
  // console.log("d");
  return (
    <div
      className={`card md:pt-5 sm:pt-5 lg:card-side  shadow-xl px-5 w-full ${color}`}
    >
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
