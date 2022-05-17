import React from "react";

const InfoCard = ({ info }) => {
  const { title, description, img, color } = info;
  console.log(info);
  console.log("d");
  return (
    <div class={`card lg:card-side bg-primary shadow-xl px-5 w-full ${color}`}>
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
