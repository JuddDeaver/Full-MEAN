  // notice how we're putting $http into the factory!
  friends_app.factory('FriendFactory', function($http) {
    var factory = {};
    var friends = [];
    // lets edit our angular factory's getFriends method as follows
    factory.getFriends = function(callback) {
      $http.get('friends').success(function(output) {
        callback(output);
      })
    }
    factory.removeFriend = function(friend, callback) {
      $http.delete('friends/' + friend._id).success(function(output) {
        callback(output);
      })
    }
    factory.addFriend = function(friend, callback) {
      $http.post('friends', friend).success(function(output) {
          callback(output);
        })
      }
    return factory;
  });