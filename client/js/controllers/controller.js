app.controller('piratesController', function($scope, PiratesService) {

    $scope.view = {};

    PiratesService.all()
      .then(function(pirates) {
        $scope.view.pirates = pirates.data
        console.log(pirates.data);
      })

      $scope.addPirate = function(pirate) {
        PiratesService.new(pirate).then(function(pirates) {
        $scope.view.pirates.push(pirates.data[0]);
        console.log(pirates.data[0]);
        $scope.pirate = {}
        $scope.pirateForm.$setPristine()
        })
      }

      // var id = $routeParams.id
      // PiratesService.one(id)
      // console.log('id from controller:', id)
      //   .then(function(pirate) {
      //     console.log(pirate);
      //     // $scope.view.pirates = pirates.data
      //   })

  });
