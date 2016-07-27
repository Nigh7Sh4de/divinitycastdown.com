(function() {
    
    var PhotosCtrl = function($scope) {
        initCtrl();
        $scope.test = "contact controller started";
    }

    dcd.com.controller('PhotosCtrl', PhotosCtrl)
}());