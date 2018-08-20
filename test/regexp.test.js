describe('Regexp API:', function () {

	describe('#isEmail()', function () {
		it('toolsbox.isEmail("leiquanlive.com") should return false ', function () {
			assert.notEqual(toolsbox.isEmail("leiquanlive.com"), true)
		});
		it('toolsbox.isEmail("leiquan@live.com") should return true ', function () {
			assert(toolsbox.isEmail("leiquan@live.com"))
		});
	});

	describe('#isIdCard()', function () {
		it('toolsbox.isIdCard("622224188203234033") should return true ', function () {
			assert(toolsbox.isIdCard("622224188203234033"))
		});
		it('toolsbox.isIdCard("zas224188203234033") should return false', function () {
			assert(!toolsbox.isIdCard("leiquan@live.com"))
		});
	});

	describe('#isPhoneNum()', function () {
		it('toolsbox.isPhoneNum("18882324234") should return true ', function () {
			assert(toolsbox.isPhoneNum("18882324234"))
		});
		it('toolsbox.isPhoneNum("8618882324234") should return true ', function () {
			assert(toolsbox.isPhoneNum("8618882324234"))
		});
		it('toolsbox.isPhoneNum("5534553") should return false', function () {
			assert(!toolsbox.isPhoneNum("5534553"))
		});
		it('toolsbox.isPhoneNum("19056323241") should return true', function () {
			assert(toolsbox.isPhoneNum("19056323241"))
		});
	});

	describe('#isUrl()', function () {
		it('toolsbox.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
			assert(toolsbox.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
		});
		it('toolsbox.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function () {
			assert(toolsbox.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
		});
		it('toolsbox.isUrl("www.baidu.com") should return true', function () {
			assert(toolsbox.isUrl("www.baidu.com"))
		});
		it('toolsbox.isUrl("baidu.com") should return true', function () {
			assert(toolsbox.isUrl("baidu.com"))
		});
		it('toolsbox.isUrl("http://baiducom") should return false', function () {
			assert(!toolsbox.isUrl("http://baiducom"))
		});
	});

});