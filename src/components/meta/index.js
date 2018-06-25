import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as MetaActions from "../../redux/actions/meta";

class Meta extends Component {
  componentDidMount() {
    this.props.changeMeta(this.props.meta);
  }

  render() {
    return (
      <React.Fragment></React.Fragment>
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    changeMeta: bindActionCreators(MetaActions.changeMeta, dispatch)
  })
)(Meta);
