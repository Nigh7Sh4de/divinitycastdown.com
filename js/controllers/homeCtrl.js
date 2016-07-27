(function() {
    
    var HomeCtrl = function($scope) {
        initCtrl();
        $scope.test = "home controller started";
    }

    dcd.com.controller('HomeCtrl', HomeCtrl)
}());