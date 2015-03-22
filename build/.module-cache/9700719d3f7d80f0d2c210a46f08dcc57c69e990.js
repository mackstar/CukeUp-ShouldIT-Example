var Pagination = React.createClass({displayName: "Pagination",
  render: function() {
    return (
      React.createElement("div", {className: "pagination"}, 
        "Hello, world! I am a CommentBox."
      )
    );
  }
});
React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);