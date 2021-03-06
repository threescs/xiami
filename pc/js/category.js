app.controller("categoryController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
    $scope.delete=function(id){
        $http({
            url:"../api/category/removeCategory.php",
            method:"get",
            params:{
                categoryId:id
            }
        }).success(function(data){
            if(data.status=="ok"){
                $rootScope.find()
            }
        })
    };
    $scope.save=function(){
        $http({
            url:"../api/category/addCategory.php",
            method:"get",
            params:{
                categoryName:$scope.newcategory
            }
        }).success(function(data){
            if(data.status=="ok"){
                $(".save-close").click();
                $scope.newcategory="";
                $rootScope.find();
            }
        })
    };
}])


