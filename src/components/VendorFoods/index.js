import React from "react";
import FoodCard from "../../components/Card";
import VendorFoodsHeader from "./vendor";

export const VendorFoods = ({ foods }) => {
  return (
    <React.Fragment>
      <VendorFoodsHeader />
      <div className="vendor-foods-container">
        <div className="scrolling-wrapper">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <div className="empty-card"></div>
        </div>
      </div>
      <br />
    </React.Fragment>
  );
};

export default VendorFoods;
