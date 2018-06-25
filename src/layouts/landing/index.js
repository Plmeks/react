import React, {Component} from "react";
import {Route} from "react-router-dom";

import Head from "./head";
import Body from "./body";
import Navigation from "../../components/navigation/";
import Footer from "../../components/footer/";

import Home from "../../pages/home";
import About from "../../pages/about";

class Landing extends Component {
    render() {
        const path = this.props.match.path;

        return(
            <React.Fragment>
                <Head />
                <Body>  
                    <Navigation />
                    <Route path={path} exact component={Home}/>
                    <Route path={`${path}/index`} exact component={Home}/>
                    <Route path={`${path}/about`} exact component={About}/>
                    <Footer />
                </Body>
            </React.Fragment>
        );
    }
}

export default Landing;

