import React, { Component } from 'react';
import Meta from "../../components/meta/";
import {meta, styles, scripts} from "./meta";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Meta meta={meta} />
        <h2>About</h2>
      </React.Fragment>
    );
  }
}

export default About;
