import MealsSummary from "./MealsSummary";
import  React from "react";
import AvailableSummary from "./AvailableMeals";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableSummary />
    </React.Fragment>
  );
};

export default Meals;
