import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [stepTwo, setStepTwo] = useState(1);

  return (
    <div className="App">
      <div className="content">
        <>
          {stepTwo === 1 ? (
            <Form
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              errorPassword={errorPassword}
              setErrorPassword={setErrorPassword}
              setStepTwo={setStepTwo}
            />
          ) : (
            <StepTwo
              name={name}
              email={email}
              password={password}
              setStepTwo={setStepTwo}
            />
          )}
        </>
      </div>
    </div>
  );
}

export default App;
