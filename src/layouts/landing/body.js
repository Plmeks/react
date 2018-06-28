import React, {Component} from "react";
import {connect} from "react-redux";

class Body extends Component {
    render() {
        const scriptsLanding = this.props.scripts.map(script => (
            <script src={`bower_components/${script}`}></script>
        ));
    
        const scriptsPage = this.props.MetaReducer.scripts.map(script => (
            <script src={`bower_components/${script}`}></script>
        ));

        return(
            <body>
                <noscript>
                You need to enable JavaScript to run this app.
                </noscript>

                <div className="container">
                    {this.props.children}
                </div>
                
                {scriptsLanding}
                {scriptsPage}
            </body>
        );
    }
}

export default connect(state => state)(Body);