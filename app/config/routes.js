var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var browserHistory = ReactRouter.browserHistory

var Main = require("../components/main/Main");
var Home = require("../components/home/Home");

var routes  = (
   <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

module.exports = routes;