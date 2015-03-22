var routes = (
  React.createElement(Route, {handler: App, path: "/"}, 
    React.createElement(DefaultRoute, {handler: Home}), 
    React.createElement(Route, {name: "pagination", path: "/pagination/:pages/:current", handler: Pagination})
  )
);



React.render(
    React.createElement(Pagination, null),
    document.getElementById('pagination')
);