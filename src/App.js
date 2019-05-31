// External imports
import React from "react";
import { Route } from "react-router-dom";

// Internal imports
import "./App.module.css";
import Layout from "./hoc/Layout/Layout";
import BooksAvailable from "./containers/BooksAvailable/BooksAvailable";
import Login from "./containers/Auth/Login/Login";
import AvailableDetail from "./containers/AvailableDetail/AvailableDetail";
import ExchangeRequestFlow from "./containers/ExchangeRequestFlow/ExchangeRequestFlow";
import MyExchanges from "./containers/MyExchanges/MyExchanges";

function App(props) {
  return (
    <Layout>
      <Route path="/" exact component={BooksAvailable} />
      <Route path="/login" exact component={Login} />
      <Route path="/available/1" exact component={AvailableDetail} />
      <Route path="/request-exchange" component={ExchangeRequestFlow} />
      <Route path="/exchange-requests" component={MyExchanges} />
    </Layout>
  );
}

export default App;
