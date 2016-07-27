(function() {
    
    var ShowsCtrl = function($scope) {
        initCtrl();
        $scope.test = "contact controller started";
    }

    dcd.com.controller('ShowsCtrl', ShowsCtrl)
}());