import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

import AuthContext from "../store/auth-context";

const userReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.trim().length > 6}
  }

  return { value: "", isValied: false };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT'){
    return {value: action.inputValue, isValid: action.inputValue.trim().length > 8}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value: state.value, isValid: state.value.trim().length > 8}
  }

  return {value: '', isValid: false}
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [username, dispatchUser] = useReducer(userReducer, {
    value: "",
    isValid: false,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false,
  });
  
  const authCtx = useContext(AuthContext)

  const { isValid: emailIsValid } = username
  const { isValid: passwordIsValid } = passwordState

  useEffect(() => {
    const timeset = setTimeout(() => {
      console.log("validation executed");
      // setFormIsValid(
      //   username.isValid && passwordState.isValid
      // );
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
      console.log(emailIsValid && passwordIsValid)
    }, 500);
    
    return () => {
      console.log('CLEANUP!')
      clearTimeout(timeset)
    }
  }, [emailIsValid, passwordIsValid]);



  const emailChangeHandler = (event) => {
    dispatchUser({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(username.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (e) => {

    dispatchPassword(
      {type: 'USER_INPUT', inputValue: e.target.value}
    )

    // setFormIsValid(username.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchUser({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(username.value, passwordState.value)
    console.log('About to call the onLogin fn')
    authCtx.onLogin(username.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            username.isValied === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="username">User Name</label>
          <input
            type="username"
            id="username"
            value={username.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
