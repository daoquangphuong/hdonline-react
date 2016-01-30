"use strict";

var React = require('react');

var Loading = React.createClass({
    render(){
        return (
            <div className="loading-screen fixed full">
                <div className="blur"></div>
                <i className="fa fa-4x fa-spin fa-spinner"/>
            </div>
        )
    }
});

module.exports = Loading;