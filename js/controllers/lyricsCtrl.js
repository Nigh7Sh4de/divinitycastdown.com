(function() {
    
    var LyricsCtrl = function($scope) {
        initCtrl();
        $scope.test = "contact controller started";
    }

    dcd.com.controller('LyricsCtrl', LyricsCtrl)
}());