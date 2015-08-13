  // PUT ANGULAR CODE HERE
  // Lets create our angular module
  // Controller code!
  friends_app.controller('FriendsController', function($scope, FriendFactory) {
  // rest of the controller code
  // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.friends array
    // replace anywhere that you see "$scope.friends = FriendFactory.getFriends()" with the following code
    $scope.friends = FriendFactory.getFriends(function(data) {
      $scope.friends = data;
      // anything else that you want to happen after you getFriends needs to be inside of this callback
    });

    $scope.getFriends = function() {
      FriendFactory.getFriends(function(data) {
        $scope.friends = data;
      });
    }
    $scope.addFriend = function(friend) {
      FriendFactory.addFriend(friend, function(data) {
        $scope.friends = data;
        $scope.friend = {};
      });
    }
    $scope.removeFriend = function (friend){
      FriendFactory.removeFriend(friend, function(data) {
        $scope.friends = data;
        $scope.friend = {};
      });

      // $scope.friends.splice($scope.friends.indexOf(friend), 1);
    }
  });