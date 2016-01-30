"use strict";

var React = require('react');
var Loading = require('../../loading/com/loading');
var App = React.createClass({
    render(){
        return (
            <div className="wrapper">
                <div id="container" className="container">
                    <Loading/>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = App;

