'use strict';

var request = require('superagent');
var valence = require('superagent-valence')('MySampleApp');

request
	.get('/d2l/api/lp/1.4/users/whoami')
	.use(valence)
	.end(function(res) {
		var user = res.body;
		var name = document.getElementById('name');
		name.textContent = 'Hello, ' + user.FirstName + ' ' + user.LastName;
	});
