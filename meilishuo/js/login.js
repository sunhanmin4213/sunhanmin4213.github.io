/**
 * Created by Administrator on 2016/11/24.
 */
(function(){
    $(document).ready(function() {
        //当点击button按钮的时候，
        //先把参数写下来，
        //登录的接口
        $('button').click(function() {
                 var data = {
                    status: 'login',
                    userID: $("input[type='text']").val(),//input的值
                    password: $("input[type='password']").val()
                };
                $.post('http://datainfo.duapp.com/shopdata/userinfo.php', data, function(ret) {
                    console.log(ret);
                    if (ret == 0) {
                        alert('用户名不存在');
                    } else if (ret == 2) {
                        alert('密码不对');
                    } else {
                        ret = JSON.parse(ret);
                        var userid = ret['userID'];
                        localStorage.setItem('userid', userid);
                        alert("成功登录")
                        //userID存起来localStorage
                        //跳转到首页
                        window.location.href = '../html/myInformation.html';
                    }
                });

        });
    })

})();