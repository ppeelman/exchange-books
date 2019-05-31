import React, { Component } from "react";

import myStyles from "./Login.module.css";
import TextField from "../../components/UI/TextField/TextField";
import Button from "../../components/UI/Button/Button";

class Login extends Component {
  render() {
    return (
      <div className={myStyles.Login}>
        <form className={myStyles["Login--Form"]}>
          <TextField
            uniqueID={"username"}
            label={"Gebruikersnaam"}
            type={"text"}
            focus={true}
          />
          <TextField
            uniqueID={"password"}
            label={"Wachtwoord"}
            type={"password"}
          />
          <Button btnType="primary">Inloggen</Button>
        </form>
        <div className={myStyles["Login--Register-link"]}>
          <Button btnType="secondary">Wordt lid</Button>
        </div>
      </div>
    );
  }
}

export default Login;
