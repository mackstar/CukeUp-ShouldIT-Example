var Router = ReactRouter;
var Route = ReactRouter.Route;

var routes = (
  React.createElement(Route, {path: "/"}, 
    React.createElement(Route, {handler: Pagination, path: "pagination/:pages/:current"})
  )
);

Router.run(routes, function (Handler, props) {
    console.log(this);
  React.render(React.createElement(Handler, null), document.getElementById('pagination'));
});
// React.render(
//     <Pagination />,
//     document.getElementById('pagination')
// );