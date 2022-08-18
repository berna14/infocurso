import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((acc, obj) => {
    return acc + obj.exercises;
  }, 0);
  return (
    <div>
      <h3>Total : {total} exercises</h3>
    </div>
  );
};

export default Total;
