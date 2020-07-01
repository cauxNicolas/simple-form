import React from "react";

const StepTwo = ({ name, email, password, setStepTwo }) => {
  return (
    <div>
      <h1>Results</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <button
        onClick={() => {
          setStepTwo(1);
        }}
      >
        Retour
      </button>
    </div>
  );
};

export default StepTwo;
