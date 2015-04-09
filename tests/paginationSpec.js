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

    it("should display the first page link as a number", function() {
        createPagination({ current: 2, pages: 3});
        expect($('a.page-number').first().text()).toEqual("1");
    });

    it("should display the last page link as a number", function() {
        createPagination({ current: 2, pages: 3});
        expect($('a.page-number').last().text()).toEqual("3");
    });

    it("should not have a link for the current page", function() {
        createPagination({ current: 2, pages: 3});
        expect($('span.page-number').first().text()).toEqual("2");
        expect($('a.page-number').length).toEqual(2);
    });

    describe("First 4 pages", function() {
        it("should display up to the first 5 page numbers when available", function() {
            createPagination({ current: 2, pages: 17});
            var current;
            for (var i = 1; i <= 5; i++) {
                current = current? current.next() : $('.page-number').first();
                expect(parseInt(current.text())).toEqual(i);
            };
            expect(current.next().text()).not.toEqual('6');
        });
    });

    describe("Last 4 pages", function() {
        it("should display the 5 last page numbers", function() {
            createPagination({ current: 17, pages: 17});
            var current;
            for (var i = 17; i >= 13; i--) {
                current = current? current.prev() : $('.page-number').last();
                expect(parseInt(current.text())).toEqual(i);
            };
            expect(current.prev().text()).not.toEqual('12');
        });
    });

    describe("Inbetween pages", function() {
        it("should display 2 pages either side of the current page", function() {
            createPagination({ current: 5, pages: 17});
            var current;
            for (var i = 3; i <= 7; i++) {
                if (i !== 5) {
                    expect($("a:contains('" + i + "')").length).toBeGreaterThan(0);
                }
            };
        });
    });

    function createPagination(data) {
        React.render(
            React.createElement(Pagination, data),
            document.getElementById('pagination')
        );
    }

});