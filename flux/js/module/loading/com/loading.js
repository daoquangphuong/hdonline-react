"use strict";

var React = require('react');
var classNames = require('classnames');

// store
var store = require('../store');

var Loading = React.createClass({
    componentDidMount(){
        store.on('update', this.forceUpdate);
    },
    componentWillUnmount(){
        store.off('update', this.forceUpdate);
    },
    render(){
        var state = store.get();
        var loadingClass = classNames({
            'loading-screen': true
        });
        return (
            <div className={loadingClass}>
                <div className="wrapper-blur animated bounceIn">
                    <div className="blur"></div>
                </div>
                <div className="icon">
                    <i className="fa fa-5x fa-spin fa-spinner"/>
                </div>
            </div>
        )
    }
});

module.exports = Loading;