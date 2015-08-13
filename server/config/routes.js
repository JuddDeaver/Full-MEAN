// First at the top of your routes.js file you'll have to require the controller
var friends = require('./../controllers/friends.js');
  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
	app.get('/friends', function(req, res) {
	  friends.index(req, res);
	})
	app.post('/friends', function(req, res) {
	  friends.create(req, res);
	})
		/* Delete Friend by ID */
	app.delete('/friends/:id', function (req, res) {
		friends.delete(req,res);
	})

// note how we are delegating to the controller and passing along req and res    });
  }; 