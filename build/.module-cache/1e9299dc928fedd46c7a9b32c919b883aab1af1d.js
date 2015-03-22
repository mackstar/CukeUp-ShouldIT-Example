var Router = ReactRouter;
var Route = ReactRouter.Route;

var routes = (
  React.createElement(Route, {path: "/"}, 
    React.createElement(Route, {handler: Pagination, path: "pagination/:pages/:current"})
  )
);

Router.run(routes, function (Handler, obj) {
    console.log(obj);
  React.render(React.createElement(Handler, obj.params), document.getElementById('pagination'));
});
// React.render(
//     <Pagination />,
//     document.getElementById('pagination')
// );