import React from "react";

export default (props) => (
    <body>
        <noscript>
        You need to enable JavaScript to run this app.
        </noscript>

        <div className="container">
            <div className="row">
                <div className="col-sm"></div>
                <div className="col-sm">
                    {props.children}
                </div>
            </div>
        </div>

        {/* <script src="bower_components/jquery/dist/jquery.min.js"></script>
        <script src="bower_components/popper.js/dist/popper.min.js"></script>
        <script src="bower_components/bootstrap/js/bootstrap.min.js"></script> */}
    </body>
);

