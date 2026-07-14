 import React from "react";
import "../Stylesheets/mystyle.css";

const percentToDecimal = (decimal) => {
  return decimal.toFixed(2) + "%";
};

const calcScore = (total, goal) => {
  return percentToDecimal(total / goal);
};

const CalculateScore = ({ Name, School, Total, Goal }) => {
  return (
    <div className="score-card">
      <h1>Student Details</h1>

      <p>
        <b>Name:</b> {Name}
      </p>

      <p>
        <b>School:</b> {School}
      </p>

      <p>
        <b>Total:</b> {Total}
      </p>

      <p>
        <b>Goal:</b> {Goal}
      </p>

      <h2>Average Score: {calcScore(Total, Goal)}</h2>
    </div>
  );
};

export default CalculateScore;