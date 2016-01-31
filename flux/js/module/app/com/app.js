"use strict";

var React = require('react');
// store
var loadingStore = require('../../loading/store');
loadingStore.trigger('show');
var App = React.createClass({
    render(){
        return (
            <div className="wrapper">
                <div id="container" className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = App;

