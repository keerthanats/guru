/**
 * Created by Shubham Bakshi on 05-02-2016.
 */

guru.controller('controller',['$scope','$http','$document',function($scope,$http,$document){
    $scope.current_no_of_gurus = 0;
    $scope.current_no_of_students = 0;
    $scope.current_no_of_followers = 0;
    $scope.current_no_of_seminars = 0;

//var myEl = angular.element( document.querySelector( '#some-id' ) );

    $scope.toggleView = function(toggleParam){
        if(toggleParam == 'student'){
            $scope.show = 'studentProcessImage';
        }else{
            $scope.show = 'guruProcessImage';
        }
    }

    $scope.activate_search = function(){

        document.querySelector('#main_search').style.visibility='visible';
        document.querySelector('#search_image').style.display='none';
        document.querySelector('#hero-unit-inner').style.paddingTop='20%';

    }

}]);
