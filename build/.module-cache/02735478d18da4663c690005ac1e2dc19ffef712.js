var Pagination = React.createClass({displayName: "Pagination",
  render: function() {

    var current = parseInt(this.props.current);
    var pages = parseInt(this.props.pages);

    return (
      React.createElement("div", {className: "pagination"}, 
        "if (current !== 1) ", 
            React.createElement(PreviousLink, {current: current}), 
        
        React.createElement(NextLink, {current: current, pages: pages}), 
        React.createElement(PageNumbers, {current: current, pages: pages})
      )
    );
  }
});

var PreviousLink = React.createClass({displayName: "PreviousLink",
    render: function() {
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
            if (pages.length > 0 && pages[pages.length-1].props.page != (i-1)) {
                pages.push(React.createElement(Dots, {key: i-1}));
            }
            pages.push(React.createElement(PageNumber, {page: i, current: this.props.current, key: i}));
        }
    }
    return (React.createElement("div", null, pages));
  }
});

function isFirstPage(page) {
    if (page === 1) {
        return true;
    }
}

function isLastPage(page, pages) {
    if (page === pages) {
        return true;
    }
}

function isEitherSideOfCurrent(page, current) {
    if (page >= current - 2 && page <= current + 2) {
        return true;
    }
}

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
    if (
        isInFirstFour(current, page) || 
        isInLastFour(current, page, pages) ||
        isFirstPage(page) ||
        isLastPage(page, pages) ||
        isEitherSideOfCurrent(page, current)
    ) {
        return true;
    }
}

var Dots = React.createClass({displayName: "Dots",
  render: function() {
    return (React.createElement("span", null, "..."));
  }
});

var PageNumber = React.createClass({displayName: "PageNumber",
  render: function() {
    var page = this.props.page;
    if (this.props.current === page) {
        return (React.createElement("span", {className: "page-number"}, page));
    }
    return (React.createElement("a", {className: "page-number"}, page));
  }
});

var NextLink = React.createClass({displayName: "NextLink",
  render: function() {
    return (
      React.createElement("a", {className: "next"}, 
        "Next"
      )
    );
  }
});