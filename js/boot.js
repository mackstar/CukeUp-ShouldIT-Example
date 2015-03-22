var Router = ReactRouter;
var Route = ReactRouter.Route;

var routes = (
  <Route path="/">
    <Route handler={Pagination} path="pagination/:pages/:current"></Route>
  </Route>
);

Router.run(routes, function (Handler, obj) {
  React.render(React.createElement(Handler, obj.params), document.getElementById('pagination'));
});