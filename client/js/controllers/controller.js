app.controller('piratesController', function($scope, PiratesService, $routeParams, $location) {

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

    PiratesService.one(id).then(function(pirate) {
        $scope.pirate = pirate.data
    })

    $scope.submitEditPirate = function(pirate) {
        PiratesService.putOne(pirate).then(function() {
            $location.url('/')
        })
    }

    $scope.deletePirate = function(id) {
        PiratesService.delete(id).then(function() {
            $location.url('/')
        })
    }

});
