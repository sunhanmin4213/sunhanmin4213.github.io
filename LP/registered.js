/**
 * Created by Administrator on 2016/11/6.
 */
(function(){
    //input框的变化
    var rt1=$(".rt1");
    var rt2=$(".rt2");
    var rt3=$(".rt3");
    var rt4=$(".rt4");
    var rt5=$(".rt5");
    var rt6=$(".rt6");
    var rt7=$(".rt7");
    function input(a){
        a.focus(function(){
            a.css({border:"1px solid #68b939"});
        })
        a.blur(function(){
            a.css({border:"1px solid #ccc"});
        })
    }
    input(rt1);
    input(rt2);
    input(rt3);
    input(rt4);
    input(rt5);
    input(rt6);
    input(rt7);



})();