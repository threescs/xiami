var app=angular.module("app",["ngRoute"]);
// 配置路由
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/catagory",{
        templateUrl:"./tmp/category.tmp",
        controller:"categoryController"
    }).when("/music",{
        templateUrl:"./tmp/music.html",
        controller:"musicController"
    }).otherwise({
        redirectTo:"/catagory"
    })
}])

app.run(["$rootScope","$http",function($rootScope,$http){
    $rootScope.find=function(){
        $http({
            url:"../api/category/findCategory.php",
            method:"get"
        }).success(function(data){
            $rootScope.category=data
        })       
    }
    $rootScope.find()
}]);