import React from "react";
import Input from "./Input";

const Form = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmpassword,
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
          /*           if (password !== confirmpassword) {
            setErrorPassword("Le mot de passe n'est pas identique");
          } */
          setStepTwo(2);
        }}
      >
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
        />
        <Input
          label="Confirm password"
          placeholder="Confirm password"
          type="password"
          value={confirmpassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
          /* errorPassword={errorPassword} */
        />
        <div className="group">
          <input type="submit" value="Envoyer" />
        </div>
      </form>
    </>
  );
};

export default Form;
