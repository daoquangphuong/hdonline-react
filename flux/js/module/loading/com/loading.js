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
            'loading-screen': true,
            'active': state.stack.length > 0
        });
        return (
            <div className={loadingClass}>
                <div className="blur"></div>
                <i className="fa fa-4x fa-spin fa-spinner"/>
            </div>
        )
    }
});

module.exports = Loading;