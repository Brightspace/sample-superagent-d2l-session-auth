'use strict';

var request = require('superagent');
var valence = require('superagent-d2l-session-auth')();

request
	.get('/d2l/api/lp/1.4/users/whoami')
	.use(valence)
	.end(function(err, res) {
		if (err) {
			console.log('An error occurred during the whoami request', err);

			var notice = document.createElement('span');
			notice.textContent = 'An error occurred. Check your browser console for details';
			document.body.appendChild(notice);

			return;
		}

		var user = res.body;
		var name = document.getElementById('name');
		name.textContent = 'Hello, ' + user.FirstName + ' ' + user.LastName;
	});
