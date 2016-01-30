"use strict";

(function () {
    try {
        require('./core/react_hook')();
        require('./core/jquery_hook')();
        var React = require('react');
        var ReactDOM = require('react-dom');
        var reactRouter = require('react-router');

        //component

        var App = require('./module/app/com/app');
        var HelloWorld = require('./module/hello_world/com/hello_world');
        var Router = reactRouter.Router;
        var Route = reactRouter.Route;
        var browserHistory = reactRouter.browserHistory;

        var routeSetup = (
            <Router history={browserHistory}>
                <Route component={App}>
                    <Route path="hello_world" component={HelloWorld}/>
                    <Route path="*" component={HelloWorld}/>
                </Route>
            </Router>
        );

        ReactDOM.render(routeSetup, document.getElementById('app'));
    }
    catch (err) {
        console.error(err);
    }
}).call();
