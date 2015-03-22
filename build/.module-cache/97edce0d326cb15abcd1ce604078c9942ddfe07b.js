var routes = (
  React.createElement(Route, {name: "pagination", path: "/pagination/:pages/:current", handler: Pagination})
);


Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.body);
});
// React.render(
//     <Pagination />,
//     document.getElementById('pagination')
// );