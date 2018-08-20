describe('Random API:', function () {
    describe('#randomColor()', function () {
        it(`/^#[0-9a-fA-F]$/.test(toolsbox.randomColor()) should return true`, function () {
            assert(/^#[0-9a-fA-F]{6}$/.test(toolsbox.randomColor()))
        });
    });

    describe('#randomNum()', function () {
        it(`10 <= toolsbox.randomNum(10, 1000) <= 100 should return true`, function () {
            let num = toolsbox.randomNum(10, 1000)
            assert(num <= 1000 && num > 10)
        });
    });
})