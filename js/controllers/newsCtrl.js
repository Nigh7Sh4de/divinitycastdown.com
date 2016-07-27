(function() {
    
    var NewsCtrl = function($scope) {
        initCtrl();
        $scope.test = "contact controller started";
    }

    dcd.com.controller('NewsCtrl', NewsCtrl)
}());