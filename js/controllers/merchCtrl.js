(function() {
    
    var MerchCtrl = function($scope) {
        initCtrl();
        $scope.test = "contact controller started";
    }

    dcd.com.controller('MerchCtrl', MerchCtrl)
}());