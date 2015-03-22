var Pagination = React.createClass({displayName: "Pagination",
  render: function() {

    var current = this.props.current;
    var pages = this.props.pages;

    console.log(this.props);

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

        if (shouldDisplayPageLink(this.props.current, i, this.props.pages)) {
            if (pages[pages.length].props.page !== i-1) {
                pages.push(React.createElement(Dots, null));
            }
            pages.push(React.createElement(PageNumber, {page: i, current: this.props.current}));
        }
    }
    return (React.createElement("div", null, pages));
  }
});

function isInFirstFour(current, page) {
    if (current < 5 && page < 6) {
        return true;
    }
}

function isInLastFour(current, page, pages) {
    var lowest = pages - 4;
    if (current > lowest && page >= lowest) {
        return true;
    }
}

function shouldDisplayPageLink(current, page, pages) {
    if (isInFirstFour(current, page) || isInLastFour(current, page, pages)) {
        return true;
    }
}

var Dots = React.createClass({displayName: "Dots",
  render: function() {
    return (React.createElement("scan", null, page));
  }
});

var PageNumber = React.createClass({displayName: "PageNumber",
  render: function() {
    var page = this.props.page;
    if (this.props.current === page) {
        return (React.createElement("span", {className: "page-number", key: page}, page));
    }
    return (React.createElement("a", {className: "page-number", key: page}, page));
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