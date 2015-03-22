var routes = (
  React.createElement(Route, {handler: App, path: "/"}, 
    React.createElement(DefaultRoute, {handler: Home}), 
    React.createElement(Route, {name: "users", handler: Users}, 
      React.createElement(Route, {name: "recent-users", path: "recent", handler: RecentUsers}), 
      React.createElement(Route, {name: "user", path: "/user/:userId", handler: User}), 
      React.createElement(NotFoundRoute, {handler: UserRouteNotFound})
    ), 
    React.createElement(NotFoundRoute, {handler: NotFound}), 
    React.createElement(Redirect, {from: "company", to: "about"})
  )
);



React.render(
    React.createElement(Pagination, null),
    document.getElementById('pagination')
);