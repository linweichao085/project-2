  ;$(function(){
    $(".back-top").click(function(){
        $("html,body").animate({
            scrollTop :0
        },500);
    });
  })
  ;$(function(){
      $(window).scroll(function(){
        var os = $(document).scrollTop();
        if( os >= $(".like").offset().top){
            $(".subnav li").eq(9).addClass("current").siblings().removeClass("current");	
        }else if(os >= $(".venue").offset().top){
            $(".subnav li").eq(8).addClass("current").siblings().removeClass("current");
        }else if(os >= $(".recommended").offset().top){
            $(".subnav li").eq(7).addClass("current").siblings().removeClass("current");
        }else if(os >= $(".affection").offset().top){
            $(".subnav li").eq(6).addClass("current").siblings().removeClass("current");
        }
        else if(os >= $(".trademark").offset().top){
            $(".subnav li").eq(5).addClass("current").siblings().removeClass("current");
        }
        else if(os >= $(".features").offset().top){
            $(".subnav li").eq(4).addClass("current").siblings().removeClass("current");
        }
        else if(os >= $(".select").offset().top){
            $(".subnav li").eq(3).addClass("current").siblings().removeClass("current");
        }
        else if(os >= $(".aging").offset().top){
            $(".subnav li").eq(2).addClass("current").siblings().removeClass("current");
        }
        else if(os >= $(".buy").offset().top){
            $(".subnav li").eq(1).addClass("current").siblings().removeClass("current");
        }
        else if(os >= $(".hot").offset().top){
            $(".subnav li").eq(0).addClass("current").siblings().removeClass("current");
        }
        
    }).trigger("scroll");
      })
      $(".subnav li").click(function(){
        var index = $(this).index();
        $("html,body").animate({
            scrollTop :$(".comment").eq(index).offset().top 
        },200);
    });
    $(function() {

        $("img.lazy").lazyload({
          placeholder:"../src/images/list/loading.gif",
          effect: "fadeIn"
          });
    
    });
    // 导航栏中鼠标移入动画
;$(function(){
    $(".mou-appear").hover(function(){
      $(this).find("div").css({display:"block"});
      $(this).css({background: "#fff"});
    },function(){
      $(this).find("div").css({display:"none"});
      $(this).css({background: "#f2f2f2"});
    });
  })
  
  //a标签的移入移出效果
  ;$(function(){
    $(".header-nav a").hover(function(){
      $(this).css({color: "#ff0036"});
    },function(){
      $(this).css({color: "#999"})
    })
  })
  ;$(function(){
    $(".header a").hover(function(){
      $(this).css({color: "#ff0036"});
    },function(){
      $(this).css({color: "#999"})
    })
  })
 