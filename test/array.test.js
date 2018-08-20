describe('Array API:', function () {
    describe('#arrayEqual()', function () {
        it(`toolsbox.arrayEqual([0, 2, 3, 4], [1, 2, 3]) should return false`, function () {
            assert.notEqual(toolsbox.arrayEqual([0, 2, 3, 4], [1, 2, 3]), true)
        });
        it(`toolsbox.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function () {
            assert.notEqual(toolsbox.arrayEqual([0, 2, 3], [1, 2, 3]), true)
        });
        it('toolsbox.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function () {
            assert(toolsbox.arrayEqual([1, 2, 3], [1, 2, 3]))
        });
        const arr = [8, 2, 3, 4, 7, 8]
        it(`toolsbox.arrayEqual([${arr},${arr}]) should return true`, function () {
            assert(toolsbox.arrayEqual(arr, arr))
        });
    });
});