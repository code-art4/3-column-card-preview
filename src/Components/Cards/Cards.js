import React from 'react'
import CardInfo from '../CardInfo/CardInfo';
import classes from './Cards.module.css';
//importing images
import image1 from './../../images/icon-sedans.svg';
import image2 from "./../../images/icon-suvs.svg";
import image3 from "./../../images/icon-luxury.svg";

function Cards() {
    const DUMMY_DATA = [
      {
        key: "Card__1",
        title: "SEDANS",
        image: image1,
        content:
          "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      },
      {
        key: "Card__2",
        title: "SUVS",
        image: image2,
        content:
          "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      },
      {
        key: "Card__3",
        title: "LUXURY",
        image: image3,
        content:
          "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style",
      },
    ];
    return (
      <div className={classes.Cards}>
        <CardInfo contents={DUMMY_DATA} />
      </div>
    );
}

export default Cards
