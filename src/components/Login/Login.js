import React, { useState, useEffect, useReducer } from "react";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const emailReducer = (state, action) => {
  if (action.type === "USER-INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  return { value: "", isValid: null };
};
const passwordReducer = (state, action) => {
  if (action.type === "USER-INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  return { value: "", isValid: null };
};

const Login = (props) => {
  const [stateEma, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [statePass, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = stateEma;
  const { isValid: passwordIsValid } = statePass;

  //const [enteredEmail, setEnteredEmail] = useState("");
  //const [enteredPassword, setEnteredPassword] = useState("");
  //const [emailIsValid, setEmailIsValid] = useState(false);
  //const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const takeIt = setTimeout(() => {
      console.log("YOXLANILIR");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEAN UP");
      clearTimeout(takeIt);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailHandler = (e) => {
    dispatchEmail({ type: "USER-INPUT", val: e.target.value });

    //setFormIsValid(e.target.value.includes('@') && passwordIsValid);
  };

  const passwordHandler = (e) => {
    dispatchPassword({ type: "USER-INPUT", val: e.target.value });

    //setFormIsValid(e.target.value.trim().length > 6 && emailIsValid);
  };

  const validateEmailHandler = (e) => {
    //setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onLogin(stateEma.value, statePass.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            stateEma.isValid === false ? classes.inValid : ""
          }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={stateEma.value}
            placeholder="Email"
            onChange={emailHandler}
            onBlur={validateEmailHandler}
            required
          />
        </div>
        <div
          className={`${classes.control} ${
            statePass.isValid === false ? classes.inValid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Password"
            value={statePass.value}
            onChange={passwordHandler}
            onBlur={validatePasswordHandler}
            required
          />
        </div>
        <div>
          <Button type="submit" disabled={!formIsValid}>
            Submit
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
