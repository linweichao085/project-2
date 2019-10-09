// 导航栏中鼠标移入动画
$(function(){
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
$(function(){
  $(".header a").hover(function(){
    $(this).css({color: "#ff0036"});
  },function(){
    $(this).css({color: "#999"})
  })
})

// 页面顶部导航栏
;$(function(){
  $(window).scroll(function(){
    // 获取滚动距离
    var os = $(document).scrollTop();
    if(os > $("#main-banner").outerHeight() ){
      $("#totalContainer.show").css({
        top:0,
      });
    }else{
      $("#totalContainer.show").css({
        top:-50,
      });
    }
  });
});

// 侧边栏楼层
;$(function() {
  $(window).scroll(function(){
    // 获取滚动距离
    var os = $(document).scrollTop();
    if(os > $("#main-banner").offset().top){
      $(".floor-nav-wrapper").show(400);
    }else{
      $(".floor-nav-wrapper").hide(400);
    };
    if( os >= $("#floor-wonderful").offset().top){
      $(".floor-lift a").eq(7).addClass("mui-lift-nav").siblings().removeClass("mui-lift-nav");	
    }else if(os >= $("#floor-hwcx").offset().top){
      $(".floor-lift a").eq(6).addClass("mui-lift-nav").siblings().removeClass("mui-lift-nav");
    }else if(os >= $("#floor-dzac").offset().top){
      $(".floor-lift a").eq(5).addClass("mui-lift-nav").siblings().removeClass("mui-lift-nav");
    }else if(os >= $("#floor-jjsh").offset().top){
      $(".floor-lift a").eq(4).addClass("mui-lift-nav").siblings().removeClass("mui-lift-nav");
    }else if(os >= $("#floor-cdkw").offset().top){
      $(".floor-lift a").eq(3).addClass("mui-lift-nav").siblings().removeClass("mui-lift-nav");
    }else if(os >= $("#floor-mlrs").offset().top){
      $(".floor-lift a").eq(2).addClass("mui-lift-nav").siblings().removeClass("mui-lift-nav");
    }else if(os >= $("#floor-tmgj").offset().top){
      $(".floor-lift a").eq(1).addClass("mui-lift-nav").siblings().removeClass("mui-lift-nav");
    }else if(os >= $("#floor-tmcs").offset().top){
      $(".floor-lift a").eq(0).addClass("mui-lift-nav").siblings().removeClass("mui-lift-nav");
    }
    }).trigger("scroll"); 
  // 点击侧边导航  页面位置滚动到对应的距离
  $(".floor-lift a").click(function(e){
    var index = $(this).index();
    $("html,body").animate({
      scrollTop:($(".floor-lift-body").eq(index).offset().top)-300
    },200);
  });
  // 点击回到顶部
  $(".floor-nav-back").click(function(){
    $("html,body").animate({
      scrollTop :0
    },200);
  });
  $(".floor-lift-header").click(function(){
    $("html,body").animate({
      scrollTop :$(".main-nav").offset().top
    },200);
  });
});

// main-banner 主轮播图
$(function () {
  var index = 0;
  var len = $(".btn>li").length;
  var timer = null;
  $(".btn>li").mouseenter(function () {
    // 获取下标
    index = $(this).index();
    change(index);
  });
  // 点击下一张
  function next() {
    index++;
    index %= len;
    change(index);
  }
  // 定时器
  $(".banner-wrapper").hover(function () {
    clearInterval(timer);
  }, function () {
    timer = setInterval(next, 2000);
  }).trigger("mouseleave");
  function change(index) {
    $(".btn>li").eq(index).addClass('banner-current').siblings().removeClass('banner-current');
    $(".banner-wrapper ul li").eq(index).stop().fadeIn().siblings().stop().fadeOut();
  }
});
