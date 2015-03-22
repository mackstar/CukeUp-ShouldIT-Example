var Pagination = React.createClass({displayName: "Pagination",
  render: function() {

    var current = this.props.current;
    var pages = this.props.pages;

    return (
      React.createElement("div", {className: "pagination"}, 
        React.createElement(PreviousLink, {current: current}), 
        React.createElement(NextLink, {current: current, pages: pages}), 
        React.createElement(PageNumbers, {current: current, pages: pages})
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

var PageNumbers = React.createClass({displayName: "PageNumbers",
  render: function() {
    var pages = [];
    for(i=1; i<=this.props.pages; i++) {
        pages.push(React.createElement(PageNumber, {page: i, current: this.props.current}));
    }
    return (React.createElement("div", null, pages));
  }
});

function isInFirstFour(current, page) {
    if (current < 5 && page) {
        
    }
}

function shouldDisplayPageLink(current, page) {
    if (isInFirstFour(current, page)) {
        return true;
    }
}

var PageNumber = React.createClass({displayName: "PageNumber",
  render: function() {
    var page = this.props.page;
    if (this.props.current === page) {
        return (React.createElement("span", {className: "page-number"}, page));
    }
    if (this.props.current <= 4 ) {
        return (React.createElement("a", {className: "page-number"}, page));
    }
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