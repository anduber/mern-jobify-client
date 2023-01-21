import React, { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Alert, FormRow, Logo } from "../components";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true
};

export const Register = () => {
  const [values, setValues] = useState(initialState);
  const {showAlert,isLoading,displayAlert} = useAppContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const {name,email,password,isMember} = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    console.log(values);
  };

  const handleChange = (e) => {
    setValues({...values,[e.target.name]:e.target.value})
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        <div className="form-row">
          {!values.isMember && (
            <FormRow
              type="text"
              value={values.name}
              name="name"
              handleChange={handleChange}
            />
          )}

          <FormRow
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />

          <FormRow
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
