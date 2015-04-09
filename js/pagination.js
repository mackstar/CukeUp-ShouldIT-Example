var Pagination = React.createClass({
  render: function() {

    var current = parseInt(this.props.current);
    var pages = parseInt(this.props.pages);

    return (
      <div className="pagination">Hello, world! I am a Pagination Component.</div>
    );
  }
});