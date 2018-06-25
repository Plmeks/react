import React, { Component } from 'react';
import css from "./styles.scss";

import Meta from "../../components/meta";
import {meta, scripts, styles} from "./meta";


class Home extends Component {
  // state = {
  //   meta: null
  // };

  componentDidMount() {
    // this.props.changeMeta(this.props.meta);
    // this.vkUser("1")
    // .then(user => {
    //   const {first_name, last_name} = user;
    //   this.setState({
    //     meta: {
    //       ...meta,
    //       title: `${meta.title} ${first_name} ${last_name}`
    //     }
    //   });
    //   console.log(this.state.meta);
    // });
  }

  // vk = {
  //   proxy: "https://cors-anywhere.herokuapp.com/",
  //   token: "a24e6f1ce4a82c65c78bae357b82698b042d163541bb886c12cf6d5ad024bf1c14f32925af148ad0edcad",
  //   version: "5.80"
  // };
  
  // vkUser = (id) => {
  //   let target =`${this.vk.proxy}https://api.vk.com/method/users.get?user_ids=${id}&access_token=${this.vk.token}&v=${this.vk.version}`;
    
  //   return new Promise((resolve, reject) => {
  //       fetch(target)
  //       .then(res => res.json())
  //       .then(user => {
  //           resolve(user.response[0]);
  //       });
  //   })
  // };

  render() {
    return (
      <React.Fragment>
        <Meta meta={meta} />
        <div className={css.home}>
          <h2>Home</h2>
          <p className={css.title}>Title</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;