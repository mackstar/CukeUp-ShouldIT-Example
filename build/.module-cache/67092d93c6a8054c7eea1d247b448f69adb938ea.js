var Router = ReactRouter;

var routes = (
  React.createElement(Route, {handler: App, path: "/"})
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('pagination'));
});
// React.render(
//     <Pagination />,
//     document.getElementById('pagination')
// );