import React from "react";
import LaptopListItem from "./laptopListItem/LaptopListItem";

const LaptopList = ({ laptops }) => {
  return (
    <ul>
      <h2>LaptopList</h2>
      {/* {laptops.map((laptop) => (
        <LaptopListItem laptop={laptop} key={laptop.id} />
      ))} */}
    </ul>
  );
};

export default LaptopList;
