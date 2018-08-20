describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            toolsbox.setCookie('test', 'getTestValue')
        })
        it(`toolsbox.getCookie('test', 'getTestValue') should return true`, function () {
            assert(toolsbox.getCookie('test') === 'getTestValue')
        })
        it(`toolsbox.getCookie('empty', '') should return true`, function () {
            assert(toolsbox.getCookie('empty') === '')
        })
        after(function () {
            toolsbox.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            toolsbox.setCookie('test', 'removeTestValue')
        })
        it(`toolsbox.removeCookie('test') should return false`, function () {
            toolsbox.removeCookie('test')
            assert.notEqual(toolsbox.getCookie('test') === 'removeTestValue', true)
        })
    })

    describe('#setCookie()', function () {
        it(`toolsbox.getCookie('test', 'setCookie') should return true`, function () {
            toolsbox.setCookie('test', 'setCookie')
            assert(toolsbox.getCookie('test') === 'setCookie')
        })
        after(function () {
            toolsbox.removeCookie('test')
        })
    })
})