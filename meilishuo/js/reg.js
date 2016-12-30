/**
 * Created by Administrator on 2016/11/23.
 */
(function(){
    //注册接口的使用
//    使用这个接口
// 用户注册： http://datainfo.duapp.com/shopdata/userinfo.php
//    点击button的时候触发这个事件
    $("button").click(function(){
        var data={
            status:"register",
            userID:$("input[type='text']").val(),
            password:$("input[type='password']").val()
        };
        $.post("http://datainfo.duapp.com/shopdata/userinfo.php",data,
            function(ret){
                if(ret==0){
                    alert("用户名已经存在")
                }else if(ret==2){
                    alert("注册失败");
                }else {
                    alert("注册成功");
                    //userID存起来localStorage,继续去写
                    //跳转到登陆页或者首页
                    window.location.href="../html/login.html";
                }
            })
    })


})()