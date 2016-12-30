/**
 * Created by Administrator on 2016/11/6.
 */
(function(){
    $(function(){
        $(".jqzoom").imagezoom();
        $("#thumblist li a").mouseover(function(){
            $(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
            $(".jqzoom").attr('src',$(this).find("img").attr("mid"));
            $(".jqzoom").attr('rel',$(this).find("img").attr("big"));
        });
    });
})()