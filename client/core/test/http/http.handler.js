describe('Core.Http.Handler', function() {

	var proxy = null;
	var http = null;
	var cache = null;
	var cookie = null;
	var dictionary = null;
	var Promise = null;
	var options = null;
	var data = null;

	beforeEach(function() {
		Promise = ns.oc.get('$Promise');
		proxy = ns.oc.get('$HttpProxy');
		cache = ns.oc.create('Core.Cache.Handler', ns.oc.create('$MapStorage'), ns.Setting.$Cache);
		cookie = ns.oc.make('Core.Storage.Cookie');
		dictionary = ns.oc.make('Core.Dictionary.Handler');

		dictionary.init();

		http = ns.oc.create('Core.Http.Handler', proxy, cache, cookie, dictionary, Promise, ns.Setting.$Http);

		options = {ttl: ns.Setting.$Http.ttl, timeout: ns.Setting.$Http.timeout, repeatRequest: ns.Setting.$Http.repeatRequest};

		data = {
			body: 111,
			params:{
				url: 'url',
				data: {},
				options: options
			},
			header:{
				'set-cookie':[
					'cookie1=cookie1',
					'cookie2=cookie2'
				]
			}
		};
	});

	using([
		'get',
		'post',
		'put',
		'patch',
		'delete'
	], function(method) {
		describe(method + ' method', function() {

			beforeEach(function() {
				data.params.method = method;
			});

			it('should be return resolved promise with data', function(done) {
				spyOn(proxy, 'request')
					.and
					.callFake(function() {
						return Promise.resolve(data);
					});

				http[method](data.params.url, data.params.data, data.params.options)
					.then(function(respond) {
						expect(respond).toEqual(data.body);
						done();
					})
			});

			it('should be rejected with error', function(done) {
				spyOn(proxy, 'request')
					.and
					.callFake(function() {
						return Promise.reject(data.params);
					});

				http[method](data.params.url, data.params.data, data.params.options)
					.then(function() {}, function(error) {
						expect(error.getName()).toEqual('CoreError');
						expect(proxy.request.calls.count()).toEqual(2);
						done();
					});
			});

			it('should be setted cookie', function(done) {
				spyOn(proxy, 'request')
					.and
					.callFake(function() {
						return Promise.resolve(data);
					});
				spyOn(proxy, 'haveToSetCookiesManually')
					.and
					.returnValue(true);
				spyOn(cookie, 'parseFromSetCookieHeader');

				http[method](data.params.url, data.params.data, data.params.options)
					.then(function() {
						expect(cookie.parseFromSetCookieHeader.calls.count()).toEqual(2);
						done();
					});
			});
		});
	});
});