import React, { Component } from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.css";
const checkoutSummary = props => {
  return (
    <div className={classes.checkoutSummary}>
      <h1>We hope it tasts well </h1>
      <div style={{ width: "00px", height: "300px", margin: "auto" }}>
        <Burger ingredient={props.ingredient} />
      </div>
      <Button btnType="Danger" clicked>
        Cancel order
      </Button>
      <Button btnType="Sucsess" clicked>
        Continue order
      </Button>
    </div>
  );
};

export default checkoutSummary;
