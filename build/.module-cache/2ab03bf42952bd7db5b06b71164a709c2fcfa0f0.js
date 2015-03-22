var Router = ReactRouter;

var routes = (
  React.createElement(Route, {handler: App, path: "/"}, 
    React.createElement(DefaultRoute, {handler: Home}), 
    React.createElement(Route, {name: "about", handler: About}), 
    React.createElement(Route, {name: "users", handler: Users}, 
      React.createElement(Route, {name: "recent-users", path: "recent", handler: RecentUsers}), 
      React.createElement(Route, {name: "user", path: "/user/:userId", handler: User}), 
      React.createElement(NotFoundRoute, {handler: UserRouteNotFound})
    ), 
    React.createElement(NotFoundRoute, {handler: NotFound}), 
    React.createElement(Redirect, {from: "company", to: "about"})
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('pagination'));
});
// React.render(
//     <Pagination />,
//     document.getElementById('pagination')
// );