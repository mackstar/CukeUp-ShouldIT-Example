var Pagination = React.createClass({
  render: function() {

    var current = parseInt(this.props.current);
    var pages = parseInt(this.props.pages);

    return (
        <div className="pagination">
        { (current == 1)? '' : <PreviousLink current={current} /> }
        <PageNumbers current={current} pages={pages} />
        { (current >= pages)? '' : <NextLink current={current} pages={pages} /> }
      </div>
    );
  }
});

function gotoPage(page) {
  return function() {
    window.document.location.href = window.document.location.href.replace(/\d*$/, page);
  }
}

var PreviousLink = React.createClass({
    render: function() {
        var previous = this.props.current - 1;
        return (
          <a className="previous" onClick={gotoPage(previous)}>
            Previous
          </a>
        );
    }
});

var NextLink = React.createClass({
  render: function() {
    var next = this.props.current + 1;
    return (
      <a className="next" onClick={gotoPage(next)}>
        Next
      </a>
    );
  }
});

var PageNumbers = React.createClass({
  render: function() {
    var pages = [];
    for(i=1; i<=this.props.pages; i++) {
        if (shouldDisplayPageLink(this.props.current, i, this.props.pages)) {
            if (pages.length > 0 && pages[pages.length-1].props.page != (i-1)) {
                pages.push(<Dots key={i-1} />);
            }
            pages.push(<PageNumber page={i} current={this.props.current} key={i} />);
        }
    }
    return (<span>{pages}</span>);
  }
});

var PageNumber = React.createClass({
  render: function() {
    var page = this.props.page;
    if (this.props.current === page) {
        return (<span className="page-number">{page}</span>);
    }
    return (<a className="page-number" onClick={gotoPage(page)}>{page}</a>);
  }
});

var Dots = React.createClass({
  render: function() {
    return (<span>...</span>);
  }
});

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