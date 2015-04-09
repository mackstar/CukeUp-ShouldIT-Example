var Pagination = React.createClass({
  render: function() {

    var current = parseInt(this.props.current);
    var pages = parseInt(this.props.pages);

    return (
        <div className="pagination">
        { (current == 1)? '' : <PreviousLink current={current} /> }
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