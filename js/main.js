'use strict';

require.config({
    baseUrl: document.URL.substring(0, document.URL.lastIndexOf("/")) + '/js/',
    paths: {
        'superagent': 'libs/superagent/superagent',
        'superagent-valence': 'libs/superagent-valence/index',
    }
});

require(['superagent', 'superagent-valence'], function(request, valence) {
    var valence = valence('MySampleApp');

    request
    .get('/d2l/api/lp/1.4/users/whoami')
    .use(valence)
    .end(function(res) {
        var user = res.body;
        var name = document.getElementById('name');
        name.textContent = 'Hello, ' + user.FirstName + ' ' + user.LastName;
    });
});
