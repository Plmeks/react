import React, { Component } from 'react';
import css from "./styles.scss";
import { connect } from 'react-redux';

import meta from "./meta";
import {setMeta, setStyles, setScripts} from "../../redux/actions/meta";
import {fetchUser, receiveUser} from "../../redux/actions/vk";

class Home extends Component {
  componentDidMount() {
    this.props.setMeta(meta);
    
    this.props.receiveUser({first_name: "*name is fetching...*"});
    this.props.fetchUser("1");
  }

  render() {
    const {first_name, last_name} = this.props.VkReducer;
    return (
      <React.Fragment>
        <div className={css.home}>
          <h2>Welcome, {first_name} {last_name}</h2>
          <p className={css.title}>Title</p>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(state => state, {
  setMeta, setStyles, setScripts, 
  fetchUser, receiveUser
})(Home);