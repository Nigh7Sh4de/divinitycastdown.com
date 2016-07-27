(function() {
    
    var BioCtrl = function($scope) {
        initCtrl();
        $scope.test = "contact controller started";
    }

    dcd.com.controller('BioCtrl', BioCtrl)
}());