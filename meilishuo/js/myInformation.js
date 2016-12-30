/**
 * Created by Administrator on 2016/11/23.
 */
(function(){
    var px=document.documentElement.clientWidth;
    //        console.log(px)
    document.getElementsByTagName("html")[0].style.fontSize=px/2+"px";
//获取用户登录名和头像
    var userid=localStorage.getItem('userid');
    if(!userid){
        window.location.href='../html/login.html';
    }else {
        $.ajax({
            type:"post",
            async:false,
            url:"http://datainfo.duapp.com/shopdata/getuser.php",
            dataType:"jsonp",
            jsonp:"callback",
            jsonpCallback:"callback",
            data:'userID='+userid,
            success:function(json) {
                var html = json[0]['userID'] + '<img src="' + json[0]['userimg_url'] + '"/>';
                $('#info').html(html);
                $('#info img').css({width:"0.4rem",height:"0.4rem"});
            },
            error:function(){
                alert('fail');
            }
        });
    }
    $("button").click(function(){
        localStorage.removeItem('userid');
        window.location.href='../html/login.html';
    })




})();