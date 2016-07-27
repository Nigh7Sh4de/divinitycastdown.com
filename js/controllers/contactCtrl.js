(function() {
    
    var ContactCtrl = function($scope) {
        initCtrl();
        $scope.test = "contact controller started";
    }

    dcd.com.controller('ContactCtrl', ContactCtrl)
}());