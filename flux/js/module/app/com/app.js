"use strict";

var React = require('react');
var $ = require('jquery');
var _ = require('underscore');
var reactRouter = require('react-router');
var ajax = require('../../../core/ajax');
// store
var loadingStore = require('../../loading/store');
var menuStore = require('../../menu/store');
// component
var Link = reactRouter.Link;
var Menu = require('../../menu/com/menu');
var App = React.createClass({
    getPage(){
        try {
            var url = window.location.href;
            loadingStore.trigger('show');
            return ajax.get(url)
                .then((html)=> {
                    menuStore.trigger('init', html, $(html).wrapAll('html').parent());
                }, (err)=> {
                    console.info(`Can't get html from url: "${url}"`);
                    console.error(err);
                })
                .done(()=> {
                    loadingStore.trigger('hide');
                });
        } catch (e) {
            console.log(e);
        }
    },
    componentDidMount (){
        this.getPage();
    },
    componentDidUpdate (prevProps){
        if (!_.isEqual(this.props.params, prevProps.params)) {
            this.getPage();
        }
    },
    render(){
        return (
            <div className="wrapper">
                <Menu/>
                <Menu.Fake/>
                <div id="container" className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = App;

