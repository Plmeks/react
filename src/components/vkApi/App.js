import React, { Component } from 'react';
import './App.css';
import MetaTags from 'react-meta-tags';

class App extends Component {
  constructor(props) {
    super(props);

    this.vk = {
      proxy: "https://cors-anywhere.herokuapp.com/",
      token: "a24e6f1ce4a82c65c78bae357b82698b042d163541bb886c12cf6d5ad024bf1c14f32925af148ad0edcad",
      version: "5.80"
    };
  }

  buttonClick = (sentParam) => {
    alert('Clicked with' + sentParam);
  }

  componentDidMount() {
    this.vkUser("210700286");
    this.vkWall("prokatxboxby");
  }

  vkUser = (id) => {
    let target =`https://api.vk.com/method/users.get?user_ids=${id}&access_token=${this.vk.token}&v=${this.vk.version}`;

    fetch(this.vk.proxy + target)
    .then(res => res.json())
    .then(user => {
      console.log(user);
    });
  };

  vkWall = (domain) => {
    let count = 1;
    let target ='https://api.vk.com/method/wall.get';
    let params = `domain=${domain}&count=${count}&access_token=${this.vk.token}&v=${this.vk.version}`;

    fetch(`${this.vk.proxy}${target}?${params}`)
    .then(res => res.json())
    .then(user => {
      console.log(user);
    });
  }

  render() {
    // return (
    //   <React.Fragment>
    //     <Button buttonClick={this.buttonClick}>
    //       <h1>Test</h1>
    //     </Button>
    //   </React.Fragment>
    // );
    return (
        <React.Fragment>
          <MetaTags>
            <title>Page 1</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="MyApp" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags>
          <div> Some Content </div>
        </React.Fragment>
      )
  }
}

export default App;
