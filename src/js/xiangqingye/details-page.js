//苏宁易购官方旗舰店
; $(function () {
    $(".shopExtra").mouseenter(function () {
        $(this).find(".tanchuang").stop().show();
    });
    $(".shopExtra").mouseleave(function () {
        $(this).find(".tanchuang").stop().hide();
    })
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
        $(".main-lbxx img").mouseover(function () {
            //获取元素下标
            var _index = $(this).index();
            $(".main-lb>img").eq(_index).show().siblings().hide();
            //改变选中时候的选项框的样式，移除其他几个选项的样式
        });
    })

    //轮播小图移入效果
    ; $(function () {
        $(".main-lbxx img").mouseover(function () {
            var id = $(this).index();
            $(".main-lbxx img").eq(id).addClass("conts").siblings().removeClass("conts");
        })
    })

    // 定位弹框
    ; $(function () {
        $(".main-sp-dw").hide();
        $(".td-r-r").click(function (e) {
            $(".main-sp-dw").show();
            e.stopPropagation();
        });
        $("body,html").click(function () {
            $(".main-sp-dw").hide();
        });
    })


    //支付方式
    ; $(function () {
        // $(".metatit-tc").hide();
        $(".zffs").mouseenter(function (e) {
            $(this).find(".metatit-tc").stop().show();
            e.stopPropagation();
        });
        $(".zffs").mouseover(function () {
            $(this).find(".metatit-tc").stop().hide();
        });
    })


    //宝贝分类
    ; $(function () {
        $(".catName").hide();
        $(".skin-box-2-img").click(function (e) {
            e.stopPropagation();
            $(".catName").show();
        })
        $("body,html").click(function () {
            $(".catName").hide();
        })
    })

    //母婴
    ; $(function () {
        $(".cat-hd").hide();
        $(".skin-box-3-img").click(function (e) {
            e.stopPropagation();
            $(".cat-hd").show();
        })
        $("body,html").click(function () {
            $(".cat-hd").hide();
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


    //数量增加 减少
    ; $(function () {
        var t = $(".td-num input");
        $(".mui-amount-increase").click(function () {
            t.val(parseInt(t.val()) + 1)
            setTotal();
        })
        $(".mui-amount-decrease").click(function () {
            if (parseInt(t.val()) > 1) {
                t.val(parseInt(t.val()) - 1)
            } else {
                $(".mui-amount-decrease".attr("disabled", "disabled"))
            }

            setTotal();
        })
    })