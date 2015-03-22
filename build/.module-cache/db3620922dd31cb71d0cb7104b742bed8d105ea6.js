var routes = (
  React.createElement(Route, {handler: App, path: "/"}, 
    React.createElement(DefaultRoute, {handler: Home}), 
    React.createElement(Route, {name: "pagination", path: "/pagination/:pages/:current", handler: Pagination}, 
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