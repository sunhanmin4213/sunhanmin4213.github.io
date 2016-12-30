/**
 * Created by Administrator on 2016/11/5.
 */
(function(){
    //登录的页面
//    二维码的出现
    $(".login-data-bottom").mouseover(function(){
        $(".login-data-bottom-ewm").css({display:"block"});
    });

    $(".login-data-bottom").mouseout(function(){
        $(".login-data-bottom-ewm").css({display:"none"});
    })
//  点击input边框变红色
    $(".input1").click(function(){
        $(".input1").css({border:"1px solid #e60012"});
        $(".input2").css({border:"1px solid #ccc"});
    })
    $(".input2").click(function(){
        $(".input1").css({border:"1px solid #ccc"});
        $(".input2").css({border:"1px solid #e60012"});
    })
})()