/**
 * Created by Administrator on 2016/11/21.
 */
(function () {
    //var px=document.documentElement.clientWidth;
    ////        console.log(px)
    //document.getElementsByTagName("html")[0].style.fontSize=px/2+"px";

    //注册视频
    //localStorage.removeItem("slide");//删除slide的值又进入slide.html
    // if (1==localStorage.getItem("slide")){
    //     window.location.href="../html/index.html";
    // }else {
    //     //第一次访问跳到slide.html
    //     window.location.href="../html/slide.html";
    // }


    //轮播图
    $('.carousel').carousel({
        interval:2000
    });

//    滚轮事件
//    $(window).scroll(function(){
//        var distance=$(document.body).scrollTop();
//        console.log(distance);
//        if(distance>724){
//            $(".nav").css("top","4rem");
//        }
//    })


//    动态获取 图片和文字  用的接口是
//    获取商品或列表： http://datainfo.duapp.com/shopdata/getGoods.php
    $(document).ready(function(){
        var imgArr=[];
        var textArr=[];
        $.ajax({
            type:"get",
            url:"http://datainfo.duapp.com/shopdata/getGoods.php",
            dataType:"jsonp",
            jsonp:"callback",
            success:function(data){
                $(data).each(function(index,data){
                    textArr.push(data[2]);//2是文字
                    imgArr.push(data[3]);//3是图片
                });
                $(imgArr).each(function(index,data){
                    $(".goods img")[index].src=data;
                });
                $(".goods p").each(function(index,data){
                        $(data).html(textArr[index]);
                });
            },
            error:function(jqXHR){
                console.log(jqXHR);
            }
        });
    });


})();