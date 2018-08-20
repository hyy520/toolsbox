describe('Device API:', function () {
    describe('#getExplore()', function () {
        it(`toolsbox.getExplore() should return "Chrome"`, function () {
            console.log(`Explore:${toolsbox.getExplore()}`)
            assert(/^Chrome:/.test(toolsbox.getExplore()))
        });
    });

    describe('#getOS()', function () {
        it(`toolsbox.getOS() should return "windows"`, function () {
            console.log(`OS:${toolsbox.getOS()}`)
            assert(toolsbox.getOS() === 'windows' || toolsbox.getOS() === 'MacOSX' || toolsbox.getOS() === 'linux')
        });
    });
});