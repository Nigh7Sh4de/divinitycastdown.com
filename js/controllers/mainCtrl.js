(function() {
    
    var MainCtrl = function($scope, $window) {
        $scope.window = $window;
        $scope.test = "main controller started";
    }

    dcd.com.controller('MainCtrl', MainCtrl)
}());