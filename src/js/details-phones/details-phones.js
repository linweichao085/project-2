//蓝港数码专营店
; $(function () {
    $(".shopExtra").mouseenter(function () {
        $(this).find(".tanchuang").stop().show();
    });
    $(".shopExtra").mouseleave(function () {
        $(this).find(".tanchuang").stop().hide();
    });
})

    //头部二维码
    ; $(function () {
        $(".shipwt").mouseenter(function () {
            $(this).find(".erweima img").stop().show();
        });
        $(".shipwt").mouseleave(function () {
            $(this).find(".erweima img").stop().hide();
        });
    })


    //轮播移入
    ; $(function () {
        $(".tb-thumb img").mouseover(function () {
            //获取元素下标
            var _index = $(this).index();
            $("#small img").eq(_index).show().siblings().hide();
            //改变选中时候的选项框的样式，移除其他几个选项的样式
        });
    })

    //选项卡小图移入效果
    ; $(function () {
        $(".tb-thumb img").mouseover(function () {
            var id = $(this).index();
            $(".tb-thumb img").eq(id).addClass("pattern").siblings().removeClass("pattern");
        })
    })

    //购买详情移入效果
    ; $(".hovers").hover(function () {
        $(this).css({
            border: "2px solid red"
        });
    }, function () {
        $(this).css({
            border: "1px solid #000"
        });
    });



//数量增加 减少
; $(function () {
    var t = $(".tm-num input");
    $(".mui-amount-increase").click(function () {
        t.val(parseInt(t.val()) + 1)
    })
    $(".mui-amount-decrease").click(function () {
        if (parseInt(t.val()) > 1) {
            t.val(parseInt(t.val()) - 1)
        } else {
            $(".mui-amount-decrease").attr("disabled", "disabled")
        }
    })
})

    //宝贝分类
    ; $(function () {
        $(".skin-h4-bady").hide()
        $(".skin-box-h4").click(function (e) {
            $(".skin-h4-bady").show()
            e.stopPropagation();
        })
        $("html").click(function () {
            $(".skin-h4-bady").hide()
        })
    })
    ; $(function () {
        $(".skin-h4-price").hide()
        $(".skin-box-price").click(function (e) {
            $(".skin-h4-price").show()
            e.stopPropagation();
        })
        $("html").click(function () {
            $(".skin-h4-price").hide()
        })
    })

    ; $(function () {
        $(".a1a").mouseover(function () {
            $(".skin-bd-add").hide()
            $(".skin-bd-even").show()
        })
        $(".b1b").mouseover(function () {
            $(".skin-bd-add").show()
            $(".skin-bd-even").hide()
        })
    })

    //产品介绍
    ; $(function () {
        $(".spxq").click(function () {
            $(".shop-yc").show();
            $(".xxss").hide();
        })
        $(".ljpj").click(function () {
            $(".shop-yc").hide();
            $(".xxss").show();
        })
    })

    ; $(function () {
        $(".rate-boolbar .boolbar-input").click(function () {
            //获取元素下标
            var _index = $(this).index();
            $(".boolbars div").eq(_index).show().siblings().hide();
            //改变选中时候的选项框的样式，移除其他几个选项的样式
        });
    })

    //图片
    ; $(function () {
        $(".spxq").click(function () {
            $(".pro-intor").show();
        })
        $(".ljpj").click(function () {
            $(".pro-intor").hide();
        })
    })




//放大镜-------------------------------
//1.
var oWrap = document.getElementById('wrap');
var smallDiv = document.getElementById('small');
var move = document.getElementById('move');
var bigDiv = document.getElementById('big');

//2.
smallDiv.onmousemove = function (ev) {
    var oEvent = ev || event;
    var iScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var iScrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    var disX = oEvent.clientX + iScrollLeft - move.offsetWidth / 2 - oWrap.offsetLeft;
    var disY = oEvent.clientY + iScrollTop - move.offsetHeight / 2 - oWrap.offsetTop;
    //  console.log(oWrap.offsetLeft)
    if (disX < 0) {
        disX = 0;
    } else if (disX > smallDiv.offsetWidth - move.offsetWidth) {
        disX = smallDiv.offsetWidth - move.offsetWidth;
    };
    if (disY < 0) {
        disY = 0;
    } else if (disY > smallDiv.offsetHeight - move.offsetHeight) {
        disY = smallDiv.offsetHeight - move.offsetHeight;
    };
    move.style.left = disX + 'px';
    move.style.top = disY + 'px';
    /*算出move块在X轴的移动距离与总的移动距离的比例*/
    var _pageX = disX / (smallDiv.offsetWidth - move.offsetWidth);
    console.log(_pageX)   /*这是一个0~1之间的数*/
    /*算出move块在Y轴的移动距离与总的移动距离的比例*/
    var _pageY = disY / (smallDiv.offsetHeight - move.offsetHeight);
    /*求出大图片在X轴的移动距离*/
    var mX = _pageX * (bigDiv.children[0].offsetWidth - bigDiv.offsetWidth);
    /*求出大图片在Y轴的移动距离*/
    var mY = _pageY * (bigDiv.children[0].offsetHeight - bigDiv.offsetHeight);
    bigDiv.children[0].style.left = -mX + 'px';
    bigDiv.children[0].style.top = -mY + 'px';
};

//3.
smallDiv.onmouseover = function (ev) {
    bigDiv.style.display = 'block';
    move.style.display = 'block';
    smallDiv.onmousemove(); //兼容IE

};
smallDiv.onmouseout = function () {
    bigDiv.style.display = 'none';
    move.style.display = 'none';
};





