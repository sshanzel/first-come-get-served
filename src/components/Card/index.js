import React from "react";
import { Card } from "@material-ui/core";
import test1 from "../../assets/test1.jpg";
import test2 from "../../assets/test2.jpg";

export const FoodCard = () => {
  const rand = Math.round(Math.random());
  const label = rand ? "Kare-Kare" : "Monggo";
  return (
    <Card className="card">
      <img src={rand ? test1 : test2} alt={label} width="100%" />
      <div className="image-text-container">
        <span className="card-food-name">{label}</span>
      </div>
    </Card>
  );
};

export default FoodCard;
