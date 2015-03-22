var routes = (
  React.createElement(Route, {name: "pagination", path: "/pagination/:pages/:current", handler: Pagination})
);



React.render(
    React.createElement(Pagination, null),
    document.getElementById('pagination')
);