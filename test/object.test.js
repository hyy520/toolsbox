describe('Object API:', function () {
    describe('#deepClone()', function () {
        it(`person deepEqual toolsbox.deepClone(null) should return true`, function () {
            let person = null
            assert.deepEqual(person, toolsbox.deepClone(person))
        });

        it(`person deepEqual toolsbox.deepClone('SlaneYang') should return true`, function () {
            let person = 'SlaneYang'
            assert.deepEqual(person, toolsbox.deepClone(person))
        });

        it(`person deepEqual toolsbox.deepClone(new Date()) should return true`, function () {
            let date = new Date()
            assert.deepEqual(date, toolsbox.deepClone(date))
        });

        it(`person deepEqual toolsbox.deepClone(person) should return true`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.deepEqual(person, toolsbox.deepClone(person))
        });

        it(`person === toolsbox.deepClone(person) should return false`, function () {
            let person = {
                name: "user",
                settings: {
                    first: "1",
                    second: [1, 2, 3, 4, 3]
                }
            }
            assert.notEqual(person, toolsbox.deepClone(person), true)
        });
    });

    describe('#isEmptyObject()', function () {
        it(`toolsbox.isEmptyObject({}) should return true`, function () {
            assert(toolsbox.deepClone({}))
        });

        it(`toolsbox.isEmptyObject({ one: 1 }) should return false`, function () {
            assert.notEqual(toolsbox.isEmptyObject({
                one: 1
            }), true)
        });

        it(`toolsbox.isEmptyObject([]) should return false`, function () {
            assert.notEqual(toolsbox.isEmptyObject([]), true)
        });
    });
})