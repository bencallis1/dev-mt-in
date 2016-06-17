/**
 * Created by Ben on 6/16/16.
 */
socialApp.service('usrSvc',function($http) {

    this.createProile = function(usrObj){
        var userData = usrObj;
        console.log(userData);
        debugger
        return $http({
            method: 'POST',
            url: ' http://localhost:3000/users',
            data: userData
        }).then(function(response){

            document.cookie =  "userId=" + response.data.id;
            console.log(response);
        })
    }

    this.getUser = function(id) {
        return $http.get('http://localhost:3000/users/' + id)
            .then(function(response){
                console.log(response);
                return response.data
            })
    }
})