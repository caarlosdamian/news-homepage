import React from "react";
import Gaming from "../../assets/images/image-gaming-growth.jpg";
import Retro from "../../assets/images/image-retro-pcs.jpg";
import Laptops from "../../assets/images/image-top-laptops.jpg";
import "./Features.scss";

export const Features = () => {
  const data = [
    {
      id: "01",
      title: "Reviving Retro PCs",
      desc: "What happens when old PCs are given modern upgrades?",
      img: Retro,
    },
    {
      id: "02",
      title: "Top 10 Laptops of 2022",
      desc: "Our best picks for various needs and budgets.",
      img: Laptops,
    },
    {
      id: "03",
      title: "The Growth of Gaming",
      desc: "How the pandemic has sparked fresh opportunities.",
      img: Gaming,
    },
  ];
  return (
    <section id="features" className="features-container">
      {data.map(({ img, id, title, desc }) => (
        <div key={id} className="item-container">
          <img src={img} alt="" className="item-img" />
          <div className="item-inner-container">
            <span className="item-id">{id}</span>
            <span className="item-name">{title}</span>
            <span className="item-description">{desc}</span>
          </div>
        </div>
      ))}
    </section>
  );
};
