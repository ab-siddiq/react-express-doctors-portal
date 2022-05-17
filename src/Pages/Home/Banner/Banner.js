import React from "react";
import chair from "../../assets/images/chair.png";
const Banner = () => {
  return (
    <div class="hero min-h-screen bg-hero-pattern">
      <div class="hero-content flex-col  lg:flex-row-reverse">
        <img src={chair} class="max-w-xl rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold"> Your New Smile Starts Here </h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in .Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary font-bold uppercase bg-gradient-to-r from-primary to-secondary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
