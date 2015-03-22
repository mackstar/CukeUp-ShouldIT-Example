var Pagination = React.createClass({displayName: "Pagination",
  render: function() {

    var current = this.props.current;
    var pages = this.props.pages;

    return (
      React.createElement("div", {className: "pagination"}, 
        React.createElement(NextLink, {current: current})
      )
    );
  }
});

var NextLink = React.createClass({displayName: "NextLink",
  render: function() {
    if (this.props.current === 0) {
        return;
    }
    return (
      React.createElement("a", {className: "previous"}, 
        "Previous"
      )
    );
  }
});