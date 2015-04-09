describe("Pagination", function() {

    var el;

    beforeEach(function() {
        el = $('<div id="pagination"></div>');
        $('body').append(el);
    });

    afterEach(function() {
        $('body').html('');
    })

    it("should display next and previous links when available", function() {
        createPagination({ current: 2, pages: 3});
        expect($('a.next').length).toBe(1);
        expect($('a.previous').length).toBe(1);
    });

    function createPagination(data) {
        React.render(
            React.createElement(Pagination, data),
            document.getElementById('pagination')
        );
    }

});