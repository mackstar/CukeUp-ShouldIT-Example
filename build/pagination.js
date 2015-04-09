var Pagination = React.createClass({displayName: "Pagination",
  render: function() {

    var current = parseInt(this.props.current);
    var pages = parseInt(this.props.pages);

    return (
      React.createElement("div", {className: "pagination"}, "Hello, world! I am a Pagination Component.")
    );
  }
});