import React from "react";

 class Head extends React.Component {
     render() {
         return(
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="manifest" href="/manifest.json" />

                <title>React sass layout</title>
                <meta property="og:description" content="React sass layout desc" />
            </head>
         );
     };
}

export default Head;

