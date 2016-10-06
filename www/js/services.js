angular.module('starter.services', [])

.factory('Shows', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var shows = [];
 return {
    all: function() {
      return $http.get("https://appist.herokuapp.com/shows.json")
    .then(function(response) {
    shows = response.data;
    return shows;
                            })
                    },

    get: function(showID) {
      for (var i=0; i < shows.length; i++){
        if (shows[i].id === parseInt(showID)){
          return shows[i];
                                              }
   
      
                                          }
      return null;
                            },
    book: function(showId, user_name, seats) {
      return $http.post("https://appist.herokuapp.com/shows/" + showId + "/book.json", {booking: {user_name: user_name, seats: seats}}).then(function(response){
        booking = response.data;
        return booking;
                });
                }
        };     
  });

