var Pagination = React.createClass({displayName: "Pagination",
  render: function() {

    var current = this.props.current;
    var pages = this.props.pages;

    return (
      React.createElement("div", {className: "pagination"}, 
        React.createElement(PreviousLink, {current: current}), " ", React.createElement(NextLink, {current: current, pages: pages})
      )
    );
  }
});

var PreviousLink = React.createClass({displayName: "PreviousLink",
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

var NextLink = React.createClass({displayName: "NextLink",
  render: function() {
    if (this.props.current >= this.props.next) {
        return;
    }
    return (
      React.createElement("a", {className: "next"}, 
        "Next"
      )
    );
  }
});