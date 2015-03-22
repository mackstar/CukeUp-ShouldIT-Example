var Router = ReactRouter;
var Route = ReactRouter.Route;

var routes = (
  React.createElement(Route, {handler: Pagination, path: "/"})
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('pagination'));
});
// React.render(
//     <Pagination />,
//     document.getElementById('pagination')
// );