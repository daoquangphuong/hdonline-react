var React = require('react');
var reactRouter = require('react-router');
var classNames = require('classnames');
// store
var store = require('../store');

// component
var NavLink = require('react-router-active-component')('li', {link: false});
var Link = reactRouter.Link;

var Menu = React.createClass({
    onUpdate(){
        this.forceUpdate();
    },
    componentDidMount(){
        store.on('update', this.onUpdate);
    },
    componentWillUnmount(){
        store.off('update', this.onUpdate);
    },
    render(){
        var state = store.get();
        var topLeft = state.topLeft;
        if (!topLeft) {
            return <div></div>
        }
        var topLeftMenu = (
            <ul className="nav navbar-nav">
                {topLeft.map((li, key)=> {
                    var child;
                    if (li.child) {
                        child = (
                            <ul key="" className="nav-child list-unstyled">
                                {
                                    li.child.map((liChild, key)=> {
                                        return (
                                            <NavLink key={key}
                                                     to={liChild.href}
                                                     activeClassName="active">
                                                <Link to={liChild.href}>
                                                    {liChild.name}
                                                </Link>
                                            </NavLink>
                                        );
                                    })
                                }
                            </ul>
                        );
                    }
                    return (
                        <NavLink key={key}
                                 className={classNames({'has-child':li.child && li.child.length > 0})}
                                 to={li.href}
                                 activeClassName="active">
                            <Link to={li.href}>
                                {li.name}
                            </Link>
                            {child}
                        </NavLink>
                    )
                })}
            </ul>
        );
        return (
            <nav className="top-menu navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="javascript:void(0);">
                            <i className="fa fa-leaf"/> HdOnline.vn
                        </a>
                    </div>
                    <div className="navbar-collapse">
                        {topLeftMenu}
                    </div>
                </div>
            </nav>
        );
    }
});

Menu.Fake = React.createClass({
    render(){
        return <div className="menu-fake"></div>
    }
});

module.exports = Menu;