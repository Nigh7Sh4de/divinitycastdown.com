(function() {
    
    var BioCtrl = function($scope) {
        initCtrl();
        $scope.test = "contact controller started";
        $scope.member = null;
        $scope.activeProfile = null;

        $scope.viewBio = function(member) {
            if($scope.member)
                $scope.member = null;
            else
                $scope.member = member;
        }
    }

    dcd.com.controller('BioCtrl', BioCtrl)
}());