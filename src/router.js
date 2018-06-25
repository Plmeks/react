import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import NotFound from "./pages/notFound/index";
import Landing from "./layouts/landing/";

class Router extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/home" component={Landing} />
            {/* <Route path="/admin" component={Admin} /> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default Router;
