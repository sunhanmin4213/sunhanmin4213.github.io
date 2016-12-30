/**
 * Created by Administrator on 2016/10/31.
 */
(function(){
    $(".ul .li").on("click",function(){
        $(".ul .li").css("background","url()");
        $(".ul .li").css("color","#fff");
        $(this).css("background","url(../image/title-sd-bg.png)");
        $(this).css("color","#ec4415");
    });

//    首页1   我的良品 鼠标事件
    $(".t2 .li").hover(function(){
        $(".user-info span").css("display","block")
        $(".user-info").css("display","block");
    }, function(){
        $(".user-info span").css("display","none")
        $(".user-info").css("display","none");

    })

//input获取焦点
    var text=document.getElementById("text");
    text.onfocus=function(){
        this.placeholder="";
    }
    text.onblur=function(){
        this.placeholder="商品关键字";
    }
//左边的列表
    $(".sn1").mouseover(function(){
        $(".snl1").css("display","block")

    });
    $(".snl1").mouseover(function(){
        $(".snl1").css("display","block")

    });
    $(".sn1").mouseout(function(){
        $(".snl1").css("display","none")
    });

    $(".sn2").mouseover(function(){
        $(".snl2").css("display","block")

    });
    $(".snl2").mouseover(function(){
        $(".snl2").css("display","block")

    });
    $(".sn2").mouseout(function(){
        $(".snl2").css("display","none")
    });

    $(".sn3").mouseover(function(){
        $(".snl3").css("display","block")

    });
    $(".snl3").mouseover(function(){
        $(".snl3").css("display","block")

    });
    $(".sn3").mouseout(function(){
        $(".snl3").css("display","none")
    });
    $(".sn4").mouseover(function(){
        $(".snl4").css("display","block")

    });
    $(".snl4").mouseover(function(){
        $(".snl4").css("display","block")

    });
    $(".sn4").mouseout(function(){
        $(".snl4").css("display","none")
    });
    $(".sn5").mouseover(function(){
        $(".snl5").css("display","block")

    });
    $(".snl5").mouseover(function(){
        $(".snl5").css("display","block")

    });
    $(".sn5").mouseout(function(){
        $(".snl5").css("display","none")
    });
    $(".sn6").mouseover(function(){
        $(".snl6").css("display","block")

    });
    $(".snl6").mouseover(function(){
        $(".snl5").css("display","block")

    });
    $(".sn6").mouseout(function(){
        $(".snl6").css("display","none")
    });


//    轮播图
    function ee() {
        var arrImg = ["../image/2.jpg",
            "../image/3.jpg",
            "../image/4.jpg"];//创建图片的数组
        var arrHttp = ["http://www.baidu.com"];//图片链接到的一个网址

        var num=0;
        var time=null;


        function hq(obj){
            return document.querySelector(obj);
        }
        var con=hq("#conter");
        var zt=hq("#zt");
        var left=hq("#left");
        var right=hq("#right");
        var ul=hq("#ul");

        var a=document.createElement("a");
        a.href=arrHttp[num];
        con.appendChild(a);

        for(var i=0;i<arrImg.length;i++){
            var oImg=document.createElement("img");
            oImg.className="img";
            var li=document.createElement("li");
            li.style.cssText="width:24px;height:24px;list-style:none;float:left;border-radius:50%;margin-left:10px;  " +
                "cursor: pointer;  text-align: center;line-height: 24px;color: white;font-size:12px;";
            oImg.src=arrImg[i];
            oImg.width=parseInt(getComputedStyle(zt).width);
            oImg.height=parseInt(getComputedStyle(zt).height);
            ul.appendChild(li);
            a.appendChild(oImg);
        }
        var img=document.getElementsByClassName("img");
        console.log(img);
        var oLi=zt.getElementsByTagName("li");

        /*轮播功能区*/
        function rt(){
            for(var i=0;i<img.length;i++){
                img[i].style.opacity="0";
                oLi[i].style.backgroundColor="#99706b";
                oLi[i].innerHTML=(i+1);

            }
            oLi[num].style.backgroundColor="#a40025";
            img[num].style.opacity="1";
            a.href=arrHttp[num];
        }
        rt();
        /*轮播功能区*/
        /*添加定时器*/
        function  er(){
            time=setInterval(function(){
                num++;
                if(num>arrImg.length-1){
                    num=0;
                }
                rt();
            },2000);
        }
        er();
        /*添加定时器*/
        zt.onmouseover=function(){
            clearInterval(time);
            left.style.display="block";
            right.style.display="block";
            left.onclick=function(){
                num--;
                if(num<0){
                    num=arrImg.length-1;
                }
                rt();
            }
            right.onclick=function(){
                num++;
                if(num>arrImg.length-1){
                    num=0;
                }
                rt();
            }
        }
        zt.onmouseout=function(){
            left.style.display="none";
            right.style.display="none";
            er();
        }
        for(var k=0;k<oLi.length;k++){
            oLi[k].ind=k;
            oLi[k].onclick=function(){
                num=this.ind;
                rt();
            }
        }
    }
    ee();

    //     天天特惠
    $(".zq").hover(function(){
        $("#every-day-special-center1").css("display","block");
        $("#every-day-special-center2").css("display","none");
        $("#every-day-special-center3").css("display","none");

    })
    $(".ms").hover(function(){
        $("#every-day-special-center1").css("display","none");
        $("#every-day-special-center3").css("display","none");
        $("#every-day-special-center2").css("display","block");
    })
    $(".bk").hover(function(){
        $("#every-day-special-center1").css("display","none");
        $("#every-day-special-center2").css("display","none");
        $("#every-day-special-center3").css("display","block");
    })
    //坚果炒货
    var kkjg=$(".kkjg");
    var ggrr=$(".ggrr");
    var thch=$(".thch");
    var first1=$(".first1");
    var first2=$(".first2");
    var first3=$(".first3");

    //肉脯鱼干
    var zr=$(".zr");
    var nr=$(".nr");
    var jy=$(".jy");
    var first4=$(".first4");
    var first5=$(".first5");
    var first6=$(".first6");

    //果干果脯
    var bfgg=$(".bfgg");
    var hmsz=$(".hmsz");
    var hzpt=$(".hzpt");
    var first7=$(".first7");
    var first8=$(".first8");
    var first9=$(".first9");

    //素食山珍
    var mwdg=$(".mwdg");
    var sjhd=$(".sjhd");
    var qtsz=$(".qtsz");
    var first10=$(".first10");
    var first11=$(".first11");
    var first12=$(".first12");

    //糕点糖果
    var gdxl=$(".gdxl");
    var bgxl=$(".bgxl");
    var tgxl=$(".tgxl");
    var first13=$(".first13");
    var first14=$(".first14");
    var first15=$(".first15");

    //进口食品
    var jkgd=$(".jkgd");
    var jktg=$(".jktg");
    var xxls=$(".xxls");
    var first16=$(".first16");
    var first17=$(".first17");
    var first18=$(".first18");

    function cc(a,b,c,d){

       a.hover(function(){
            b.css("display","block");
            c.css("display","none");
            d.css("display","none");

        })
    }
    cc(kkjg,first1,first2,first3);
    cc(ggrr,first2,first1,first3);
    cc(thch,first3,first1,first2);

    cc(zr,first4,first5,first6);
    cc(nr,first5,first4,first6);
    cc(jy,first6,first4,first5);

    cc(bfgg,first7,first8,first9);
    cc(hmsz,first8,first7,first9);
    cc(hzpt,first9,first7,first8);

    cc(mwdg,first10,first11,first12);
    cc(sjhd,first11,first10,first12);
    cc(qtsz,first12,first10,first11);

    cc(gdxl,first13,first14,first15);
    cc(bgxl,first14,first13,first15);
    cc(tgxl,first15,first13,first14);

    cc(jkgd,first16,first17,first18);
    cc(jktg,first17,first16,first18);
    cc(xxls,first18,first16,first17);

//滚动
    var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true
    });


//左边的侧边栏
    var jkli1=$(".jk-li1");
    var jka1=$(".jk-a1");
    var jkt1=$(".jk-text1");

    var jkli2=$(".jk-li2");
    var jka2=$(".jk-a2");
    var jkt2=$(".jk-text2");

    var jkli3=$(".jk-li3");
    var jka3=$(".jk-a3");
    var jkt3=$(".jk-text3");

    var jkli4=$(".jk-li4");
    var jka4=$(".jk-a4");
    var jkt4=$(".jk-text4");

    var jkli5=$(".jk-li5");
    var jka5=$(".jk-a5");
    var jkt5=$(".jk-text5");
   function side(e,f,j){
       e.hover(function(){
           f.css("display","none");
           j.css("display","block")
       },function(){
           j.css("display","none");
           f.css("display","block")
       })
   }
    side(jkli1,jka1,jkt1);
    side(jkli2,jka2,jkt2);
    side(jkli3,jka3,jkt3);
    side(jkli4,jka4,jkt4);
    side(jkli5,jka5,jkt5);

//左边侧边栏出现的效果
    $(window).scroll(function(){
        //定义距离
        var distance=$(document.body).scrollTop();
        //console.log(distance);
        if(distance>724){
            $(".left-sidebar").css("display","block");
        }else {
            $(".left-sidebar").css("display","none");
        }
    })
//右边效果
    var rs1=$(".rs1");
    var push1=$(".push1");
    var rs2=$(".rs2");
    var push2= $(".push2");
    var rs3=$(".rs3");
    var push3= $(".push3");
    var rs4=$(".rs4");
    var push4= $(".push4");
    var rs5=$(".rs5");
    var push5= $(".push5");
    function animate(a,b){
        a.mouseover(function(){
            //b.css({width:"0",opacity: "0"});
            b.animate({width:"80px", opacity:"1" },400)
        })
        a.mouseout(function(){
            //b.css({width:" 80px",opacity: "1"});
            b.animate({width:"0px", opacity:"0" },400)
        })

    }
    animate(rs1,push1);
    animate(rs2,push2);
    animate(rs3,push3);
    animate(rs4,push4);
    animate(rs5,push5);

//右边二维码的效果
    $(".top6").mouseover(function(){
        $(".top6-ewm").css({display:"block"});
    });

    $(".top6").mouseout(function(){
        $(".top6-ewm").css({display:"none"});
    })
    //当点击返回顶部的时
    var rs5=document.getElementsByClassName("rs5")[0];
    var time;
    document.onscroll=function(){
        rs5.onclick=function(){
            //var distance=$(document.body).scrollTop();
            //distance=0
            if(document.body.scrollTop>0){
               time=setInterval(function(){
                    document.body.scrollTop-=1000;
                },100)
            }
        }
        if(document.body.scrollTop==0){
            clearInterval(time);
        }

    }



})();