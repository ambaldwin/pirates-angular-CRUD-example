
app.factory('PiratesService', function ($http) {
  return {
    all: function() {
      return $http.get('/api/pirates');
    },
    new: function(pirate) {
      return $http.post('/api/pirates', pirate);
    },
    one: function(id) {
      return $http.get('/api/pirates/' + id);
    },
    putOne: function(editedPirate) {
      const id = editedPirate.id
      return $http.put(`/api/pirates/${id}`, editedPirate)
    },
    delete: function(id) {
      var num = id.id
      return $http.delete(`/api/pirates/${num}`)
    }
  }
})
