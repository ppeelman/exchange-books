import React, { Component } from "react";

import { Redirect } from "react-router-dom";

import { connect } from "react-redux";

import myStyles from "./Login.module.css";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import * as actions from "../../../store/actions/index";
import { checkValidity } from "../../../shared/utility";

class Login extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
  }

  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          label: "E-mailadres",
          initialFocus: true
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          label: "Wachtwoord",
          initialFocus: false
        },
        value: "",
        validation: {
          required: true,
          isEmail: false,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    isFormValid: false
  };

  submitHandler(event) {
    event.preventDefault();
    this.props.onLogin(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
  }

  inputChangedHandler(event, controlName) {
    // Determine if the input value is valid with regard to the validation rules specified in the state
    const isValid = checkValidity(
      event.target.value,
      this.state.controls[controlName].validation
    );

    // Create a deep-enough copy of the state slice that will need to be updated
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: isValid,
        touched: true
      }
    };

    // Calculate if the form as a whole is valid
    let isFormValid = true;
    for (let key in updatedControls) {
      isFormValid = updatedControls[key].valid && isFormValid;
    }

    this.setState({ controls: updatedControls, isFormValid: isFormValid });
  }

  render() {
    // 1. Create an array containing the configuration data for each input field
    let formElementsArray = [];

    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }

    // 1.1 Create the Input elements based on the array containing input configuration data
    const form = formElementsArray.map(el => {
      return (
        <Input
          id={el.id}
          label={el.config.elementConfig.label}
          type={el.config.elementConfig.type}
          focus={el.config.elementConfig.initialFocus}
          value={el.config.value}
          changed={event => this.inputChangedHandler(event, el.id)}
          invalid={!el.config.valid}
          touched={el.config.touched}
        />
      );
    });

    let redirectOnLogin = null;
    if (this.props.isAuthenticated) {
      redirectOnLogin = <Redirect to="/" />;
    }

    return (
      <div className={myStyles.Login}>
        {redirectOnLogin}
        {this.props.error ? <p>{this.props.error.message}</p> : null}
        <form onSubmit={this.submitHandler} className={myStyles["Login--Form"]}>
          {form}
          <Button btnType="primary" disabled={!this.state.isFormValid}>
            Inloggen
          </Button>
        </form>
        <div className={myStyles["Login--Register-link"]}>
          <Button btnType="secondary">Wordt lid</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(actions.auth(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
