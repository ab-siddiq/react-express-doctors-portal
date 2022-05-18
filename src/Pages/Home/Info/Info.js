import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
const Info = () => {
  const cardInfos = [
    {
      id: 1,
      title: "Opening Hours",
      description: "Lorem Ipsum is simply dummy text of the pri",
      img: clock,
      color: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      title: "Visit our location",
      description: "Brooklyn, NY 10036, United States",
      img: marker,
      color: "bg-accent",
    },
    {
      id: 3,
      title: "Contact us now",
      description: "+000 123 456789",
      img: phone,
      color: "bg-gradient-to-r from-primary to-secondary",
    },
  ];
  return (
    <div class="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 justify-items-center gap-10 mx-auto px-12 text-base-100 my-10">
      {cardInfos.map((cardInfo) => (
        <InfoCard key={cardInfo.id} info={cardInfo}></InfoCard>
      ))}
    </div>
  );
};

export default Info;
