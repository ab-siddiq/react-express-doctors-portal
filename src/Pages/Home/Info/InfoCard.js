import React from "react";

const InfoCard = ({ img }) => {
  return (
    <div class="grid grid-cols-3 justify-items-center gap-4 mx-auto">
      <div class="card lg:card-side bg-primary shadow-xl px-5">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      <div class="card lg:card-side bg-primary shadow-xl px-5">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
      <div class="card lg:card-side bg-primary shadow-xl px-5">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Opening Hours</h2>
          <p>Lorem Ipsum is simply dummy text of the pri</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
