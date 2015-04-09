describe("Pagination", function() {

    var el;

    beforeEach(function() {
        el = $('<div id="pagination"></div>');
        $('body').append(el);
    });

    afterEach(function() {
        $('body').html('');
    })

    it("should render", function() {
        createPagination();
        expect(el.text()).toEqual("Hello, world! I am a Pagination Component.");
    });

    function createPagination(data) {
        React.render(
            React.createElement(Pagination, data),
            document.getElementById('pagination')
        );
    }

});