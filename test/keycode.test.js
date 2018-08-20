describe('Keycode API:', function () {

    describe('#getKeyName()', function () {
        it(`toolsbox.getKeyName(13) should return "Enter"`, function () {
            assert(toolsbox.getKeyName(13) === 'Enter')
        });
        const keycode = 10000
        it(`toolsbox.getKeyName(${keycode}) should return ''`, function () {
            assert(toolsbox.getKeyName(keycode) === '')
        });
    });

});