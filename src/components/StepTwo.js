import React from "react";

const StepTwo = ({ name, email, password, setStepTwo }) => {
  return (
    <div className="stepTwo">
      <h1>Results</h1>
      <p>
        <span>Name :</span> {name}
      </p>
      <p>
        <span>Email :</span> {email}
      </p>
      <p>
        <span>Password :</span> {password}
      </p>
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
