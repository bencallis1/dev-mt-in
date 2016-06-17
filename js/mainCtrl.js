socialApp.controller('mainCtrl',function($scope,usrSvc,$stateParams) {

    $scope.profileInfo = false;
    $scope.userData = {};

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length,c.length);
            }
        }
        return "";
    }

    if(getCookie('userId')) {
        usrSvc.getUser(getCookie('userId'))
            .then(function(response) {
                $scope.userData = response;
                $scope.profileInfo = true;
            });
    }



    $scope.createProile = function(){
        console.log( makeUser())
        usrSvc.createProile(makeUser()
            .then(function(response) {
                $scope.profileInfo = false;
                $scope.userData = response.data;
            }));
    };

    function makeUser(){
        return {
            fullname: $scope.userData.fullname,
            tagline: $scope.userData.tagline,
            imageurl: $scope.userData.imageurl,
            bio: $scope.userData.bio,
            id: Math.floor(Math.random() *500)
        }
    }

    $scope.updateProfile = function(){

        $scope.profileInfo = !$scope.profileInfo
    }



});