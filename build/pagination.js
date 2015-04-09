var Pagination = React.createClass({displayName: "Pagination",
  render: function() {

    var current = parseInt(this.props.current);
    var pages = parseInt(this.props.pages);

    return (
        React.createElement("div", {className: "pagination"}, 
         (current == 1)? '' : React.createElement(PreviousLink, {current: current}), 
         (current >= pages)? '' : React.createElement(NextLink, {current: current, pages: pages})
      )
    );
  }
});

function gotoPage(page) {
  return function() {
    window.document.location.href = window.document.location.href.replace(/\d*$/, page);
  }
}

var PreviousLink = React.createClass({displayName: "PreviousLink",
    render: function() {
        var previous = this.props.current - 1;
        return (
          React.createElement("a", {className: "previous", onClick: gotoPage(previous)}, 
            "Previous"
          )
        );
    }
});

var NextLink = React.createClass({displayName: "NextLink",
  render: function() {
    var next = this.props.current + 1;
    return (
      React.createElement("a", {className: "next", onClick: gotoPage(next)}, 
        "Next"
      )
    );
  }
});