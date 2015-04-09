var Pagination = React.createClass({displayName: "Pagination",
  render: function() {

    var current = parseInt(this.props.current);
    var pages = parseInt(this.props.pages);

    return (
        React.createElement("div", {className: "pagination"}, 
         (current == 1)? '' : React.createElement(PreviousLink, {current: current}), 
        React.createElement(PageNumbers, {current: current, pages: pages}), 
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

var PageNumbers = React.createClass({displayName: "PageNumbers",
  render: function() {
    var pages = [];
    for(i=1; i<=this.props.pages; i++) {
        if (shouldDisplayPageLink(this.props.current, i, this.props.pages)) {
            pages.push(React.createElement(PageNumber, {page: i, current: this.props.current, key: i}));
        }
    }
    return (React.createElement("span", null, pages));
  }
});

var PageNumber = React.createClass({displayName: "PageNumber",
  render: function() {
    var page = this.props.page;
    if (this.props.current === page) {
        return (React.createElement("span", {className: "page-number"}, page));
    }
    return (React.createElement("a", {className: "page-number", onClick: gotoPage(page)}, page));
  }
});

function shouldDisplayPageLink(current, page, pages) {
    if (
        isInFirstFour(current, page) ||
        isInLastFour(current, page, pages) ||
        isEitherSideOfCurrent(page, current)
    ) {
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


function isEitherSideOfCurrent(page, current) {
    if (page >= current - 2 && page <= current + 2) {
        return true;
    }
}