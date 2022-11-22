import React from "react";
import "./News.scss";

export const News = () => {
  const itemData = [
    {
      title: "Hydrogen VS Electric Cars",
      desc: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      title: "The Downsides of AI Artistry",
      desc: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      title: "Is VC Funding Drying Up?",
      desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <div className="news-container">
      <h1 className="news-header">New</h1>
      <div className="news-grid">
        {itemData.map((item) => (
          <div className="item-container">
            <span className="item-title">{item.title}</span>
            <span className="item-desc">{item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
