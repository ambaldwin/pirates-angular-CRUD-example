app.controller('piratesController', function($scope, PiratesService) {

    $scope.view = {};

    PiratesService.all()
      .then(pirates => {
        $scope.view.pirates = pirates.data
        // console.log(pirates.data);
      })

      $scope.addPirate = function(pirate) {
        // console.log('pirateinfo from form:', pirate)
        PiratesService.new(pirate).then(function(pirates) {
        $scope.view.pirates.push(pirates.config.data);
        $scope.pirate = {}
        $scope.pirateForm.$setPristine()
        })
      }


  });
