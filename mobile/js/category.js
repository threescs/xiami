app.controller("navsController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
    // 初始化分类
    $http({
        url:"../api/category/findCategory.php",
        method:"get"
    }).success(function(data){
        $rootScope.list=data
    })
    $scope.six=function(value,id){
        $scope.currentId=value+17
    }
}]);



app.controller("msccontroller",["$scope","$http","$location","$rootScope","$routeParams",function($scope,$http,$location,$rootScope,$routeParams){
        console.log();
    $rootScope.url=$location.$$path.split("/")[2];
         $http({
            url:"../api/music/findMusicByCategoryId.php",
            method:"get",
            params:{categoryId:$rootScope.url}
        }).success(function(data){
            $scope.musicList=data;
        }) 
        
        $scope.play=function(murl,aurl,n,a){
            $routeParams.murl=murl;
            var img=document.querySelector("#img");
            var cover=document.querySelector(".cover");
            var str="url('../"+aurl+"')"
            cover.style.backgroundImage=str;            
            img.src="../"+aurl;   
            $routeParams.name=n;
            $routeParams.author=a;
            console.log(document.querySelector("#title").innerHtml);
            document.querySelector("#title").innerText=$routeParams.name?$routeParams.name:"带你去旅行"
            document.querySelector("#name").innerText=$routeParams.author?$routeParams.author:"校长"
        }
        

}]);

app.controller("msccontroller2",["$scope","$http","$location","$rootScope","$routeParams",function($scope,$http,$location,$rootScope,$routeParams){
$rootScope.url=$location.$$path.split("/")[2];
     $http({
        url:"../api/music/findMusicByCategoryId.php",
        method:"get",
        params:{categoryId:$rootScope.url}
    }).success(function(data){
        $scope.musicList=data;
    }) 
}]);
app.controller("msccontroller3",["$scope","$http","$location","$rootScope","$routeParams",function($scope,$http,$location,$rootScope,$routeParams){
    $rootScope.url=$location.$$path.split("/")[2];
        $http({
        url:"../api/music/findMusicByCategoryId.php",
        method:"get",
        params:{categoryId:$rootScope.url}
    }).success(function(data){
        $scope.musicList=data;
    }) 
}]);

app.controller("msccontroller4",["$scope","$http","$location","$rootScope","$routeParams",function($scope,$http,$location,$rootScope,$routeParams){
    $rootScope.url=$location.$$path.split("/")[2];
        $http({
        url:"../api/music/findMusicByCategoryId.php",
        method:"get",
        params:{categoryId:$rootScope.url}
    }).success(function(data){
        $scope.musicList=data;
    }) 
}]);

app.controller("msccontroller5",["$scope","$http","$location","$rootScope","$routeParams",function($scope,$http,$location,$rootScope,$routeParams){
    $rootScope.url=$location.$$path.split("/")[2];
        $http({
        url:"../api/music/findMusicByCategoryId.php",
        method:"get",
        params:{categoryId:$rootScope.url}
    }).success(function(data){
        $scope.musicList=data;
    }) 
}]);








app.controller("footerController",["$scope","$routeParams","$interval",function($scope,$routeParams,$interval){
    $scope.bofang=false;
    $scope.go=function(){
        $scope.bofang=!$scope.bofang;
        var src="../"+$routeParams.murl;
        document.querySelector("#musicId").src=src;
        document.querySelector("#musicId").play();
        var go=document.querySelector(".go");
        var i=-100;
        $interval(function(){
            i++;
            go.style.transform="translateX("+(i)+"%)";
        },1000)
    }

}])