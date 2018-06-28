import React from "react";
import {connect} from "react-redux";

 class Head extends React.Component {
     render() {
        const {title, description} = this.props.MetaReducer;

        const stylesLanding = this.props.styles.map(style => (
            <link rel="stylesheet" type="text/css" href={`/bower_components/${style}`} />
        ));

        const stylesPage = this.props.MetaReducer.styles.map(style => (
            <link rel="stylesheet" type="text/css" href={`/bower_components/${style}`} />
        ));

        return(
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="manifest" href="/manifest.json" />

                <title>{title}</title>
                <meta property="og:description" content={description} />

                {stylesLanding}
                {stylesPage}
            </head>
        );
     };
}

export default connect(
    state => state
)(Head);

