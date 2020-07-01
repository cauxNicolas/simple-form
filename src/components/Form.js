import React from "react";
import Input from "./Input";
import rocket from "../img/rocketForm.svg";

const Form = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  errorPassword,
  setErrorPassword,
  setStepTwo,
}) => {
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (password !== confirmPassword) {
            setErrorPassword("Le mot de passe n'est pas identique");
          } else {
            setStepTwo(2);
          }
        }}
      >
        <div className="formContent">
          <h1>Rocket Form</h1>
          <Input
            label="Nom Prénom"
            placeholder="Nom Prénom"
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Input
            label="Email"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            label="Password"
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            errorPassword={errorPassword}
          />
          <Input
            label="Confirm password"
            placeholder="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}
            errorPassword={errorPassword}
          />
          <div className="group">
            <input type="submit" value="Envoyer" />
          </div>
        </div>
        <div className="rocket">{/*  <img src={rocket} /> */}</div>
      </form>
    </>
  );
};

export default Form;
