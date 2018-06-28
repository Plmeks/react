import React, { Component } from 'react';
import { connect } from "react-redux";
import {setMeta} from "../../redux/actions/meta";

class Meta extends Component {
  componentDidMount() {
    this.props.setMeta(this.props.meta);
  }

  render() {
    return (
      <React.Fragment></React.Fragment>
    );
  }
}

export default connect(
  null,
  {setMeta}
)(Meta);
