// JavaScript source code
angular.module('range', [])
    .controller('myctrl', ['$scope', function ($scope) {

        $scope.max = 100;
        $scope.min = 0;
        $scope.value = 0;

        
    }]);
document.addEventListener('listen', function (y) {
    var x = y;
    var color = 'linear-gradient(90deg,orange' + x + '%, #2a3b81' + x + '%)';
    slider.style.background = color;

})
