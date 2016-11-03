app.controller('piratesController', function($scope, PiratesService, $routeParams) {

    $scope.view = {};

    PiratesService.all()
      .then(function(pirates) {
        $scope.view.pirates = pirates.data
      })

      $scope.addPirate = function(pirate) {
        PiratesService.new(pirate).then(function(pirates) {
        $scope.view.pirates.push(pirates.data[0]);
        $scope.pirate = {}
        $scope.pirateForm.$setPristine()
        })
      }

      var id = $routeParams.id
      PiratesService.one(id).then(function(pirates) {
          console.log('PIRATE:', pirates);
          $scope.pirates = pirates.data
        })

  });
