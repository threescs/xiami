var app=angular.module("app",["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/category/17",{
        templateUrl:"tmp/category.html",
        controller:"msccontroller"
    }).when("/category/18",{
        templateUrl:"tmp/2.html",
        controller:"msccontroller2"
    }).when("/category/19",{
        templateUrl:"tmp/3.html",
        controller:"msccontroller3"
    }).when("/category/20",{
        templateUrl:"tmp/4.html",
        controller:"msccontroller4"
    }).when("/category/21",{
        templateUrl:"tmp/5.html",
        controller:"msccontroller5"
    }).otherwise({
        redirectTo:"/category/17"
    })
}])