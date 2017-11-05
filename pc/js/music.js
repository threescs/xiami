app.controller("musicController",["$scope","$http","$rootScope",function($scope,$http,$rootScope){
    // 初始化数据
    $scope.music=function(){
        $http({
            url:"../api/music/findMusic.php",
            method:"get",
        }).success(function(data){
            $scope.musicList=data
        })
    }
    $scope.music()
    
    // 上传歌手照片
    $("#input_file_imgaeId").fileupload({
        done:function(data,result){
            // result.result=upload/author/11.jpg
            $scope.authorUrl=result.result
            if($scope.authorUrl){
                var src="../"+$scope.authorUrl;
                $(".imageShow").show().delay(1000).animate({"marginLeft":'100px'},1000);
                $(".imageShow>img").attr("src",src)
            }            
        }
    })
    // 上传歌曲
    $("#input_file_musicId").fileupload({
        autoLoad:true,
        done:function(data,result){
            $scope.musicUrl=result.result;
            console.log($scope.musicUrl)
        }
    })
    var params={}
    $scope.saveMusic=function(){
        params={
            categoryId:$scope.mscCategory,
            musicName:$scope.mscMusic,
            authorName:$scope.mscAuthor,
            musicUrl:$scope.musicUrl,
            authorUrl:$scope.authorUrl
        }
        $http({
            url:"../api/music/addMusic.php",
            method:"get",
            params:params
        }).success(function(data){
            console.log(data)
            console.log(params)
            if(data.status=="ok"){
                $scope.music();
                $(".save-close").click();
                $scope.mscCategory="";
                $scope.mscMusic="";
                $scope.mscAuthor="";
                $(".imageShow>img").attr("src","")
            }
        })
    }
}])