import React from "react";
import Card from "./Card";

const DUMMY_SLIDER = [
  {
    circle: "/assests/Ellipse 1.svg",
    image: "/assests/Code_perspective_matte.png",
    head: "Web Design & Development",
    body: " A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    circle: "/assests/Ellipse 1.svg",
    image: "/assests/Mobile_app_perspective_matte.png",
    head: "Mobile App Development",
    body: " A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    circle: "/assests/Ellipse 1.svg",
    image: "/assests/Dashboard_perspective_matte.png",
    head: "Software Testing Service",
    body: " A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    circle: "/assests/Ellipse 1.svg",
    image: "/assests/Mobile_app_perspective_matte.png",
    head: "Web Design & Development",
    body: " A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    circle: "/assests/Ellipse 1.svg",
    image: "/assests/Mobile_app_perspective_matte.png",
    head: "Web Design & Development",
    body: " A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

const Cards = () => {
  return (
    <div className="md:flex gap-[40px] max-lg:flex-col">
      {DUMMY_SLIDER.map((e) => (
        <Card ciecle={e.circle} image={e.image} head={e.head} body={e.body} />
      ))}
    </div>
  );
};

export default Cards;
