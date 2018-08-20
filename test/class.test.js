describe('Class API:', function () {
    describe('#addClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_addClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_addClass')
        })
        it(`toolsbox.addClass($ele, 'test') should return true`, function () {
            toolsbox.addClass($ele, 'test')
            assert(toolsbox.hasClass($ele, 'test'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#hasClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_hasClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_hasClass')
            toolsbox.addClass($ele, 'test')
        })
        it(`toolsbox.hasClass($ele, 'test') should return true`, function () {
            assert(toolsbox.hasClass($ele, 'test'))
        });
        it(`toolsbox.hasClass($ele, 'test') should return false`, function () {
            assert(!toolsbox.hasClass($ele, 'test2'))
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });

    describe('#removeClass()', function () {
        let $ele = null
        before(function () {
            let div = document.createElement('div')
            div.id = 'J_removeClass'
            document.body.appendChild(div)
            $ele = document.querySelector('#J_removeClass')
            toolsbox.addClass($ele, 'test')
        })
        it(`toolsbox.removeClass($ele, 'test') should return false`, function () {
            toolsbox.removeClass($ele, 'test')
            assert.notEqual(toolsbox.hasClass($ele, 'test'), true)
        });
        it(`toolsbox.removeClass($ele, 'test') should return false`, function () {
            toolsbox.removeClass($ele, 'test')
            assert.notEqual(toolsbox.hasClass($ele, 'test'), true)
            toolsbox.addClass($ele, 'newTest')
            assert(toolsbox.hasClass($ele, 'newTest'))
            toolsbox.removeClass($ele, 'newTest')
            assert.notEqual(toolsbox.hasClass($ele, 'newTest'), true)
        });
        after(function () {
            document.body.removeChild($ele)
        })
    });
});