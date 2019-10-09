
// 热门品牌
$(function(){
	var str1 = "";
	for(var i=0;i<json1.length;i++){
    str1 += 
    `<li class="brand-item">
    <div class="brand-img">
      <img src="${json1[i].img_src}">
    </div>
    <a class="brand-mask" href="##">
      <div class="coupon">
        <span>${json1[i].name}</span>
      </div>
      <div class="enter">
        <span>点击进入</span>
      </div>
    </a>
    </li>`
    };
$(".init").html(str1);
});
// 天猫超市
$(function(){
  var str2 = `
  <div class="grid two-grid">
  <div class="floor-tabs">
    <ul class="floor-tab-head">
      <li class="floor-current-tab">
        <p class="tab-title">今日疯抢</p>
      </li>
      <li class="">
        <p class="tab-title">量贩装</p>
      </li>
    </ul>
    <div class="floor-tab-content">
      <div class="floor-tab-detail" style="display: block;">
        <a class="right-detail-a"
          href="">
          <div class="right-detail">
            <div class="title-wrap">
              <img class="cla-icon"
                src="https://img.alicdn.com/tfs/TB12RqQewMPMeJjy1XdXXasrXXa-23-23.png">
              <span class="tab-item-title">买2免1</span>
            </div>
            <div>
              <span class="tab-desp">清洁大作战</span>
            </div>
          </div>
          <img class="item-img"
            src="https://img.alicdn.com/tfs/TB1Z6puS7zoK1RjSZFlXXai4VXa-400-400.jpg">
        </a>
      </div>
      <div class="floor-tab-detail" style="display: none;">
        <a class="right-detail-a"
          href="">
          <div class="right-detail">
            <div class="title-wrap">
              <img class="cla-icon"
                src="https://img.alicdn.com/tfs/TB12RqQewMPMeJjy1XdXXasrXXa-23-23.png">
              <span class="tab-item-title">单件包邮</span>
            </div>
            <div>
              <span class="tab-desp">低价享不停</span>
            </div>
          </div>
          <img class="item-img" src="https://img.alicdn.com/tps/i4/TB1YHy.gBcHL1JjSZFBwu1iGXXa.png">
        </a>
      </div>
    </div>
  </div>
</div>
  `;
  for(var i=0;i<json2.length;i++){
    str2 +=
    `
    <a class="grid one-grid-price " href="" >
      <div class="floor-item-content-wrap">
        <div class="floor-item-tag color-type-green" style="visibility:hidden"></div>
        <img class="floor-item-img"
          src="${json2[i].img_src}">
        <div class="floor-item-title">${json2[i].floor_title}</div>
        <div class="floor-price">${json2[i].floor_price}</div>
        <div class="floor-item-reason" style="display:none">
          <div class="floor-item-reason-content"></div>
        </div>
        <div class="item-activity-icon" style="display:none"></div>
      </div>
    </a>
    `
  };
  $('#floor-tmcs .middle-column-con').html(str2);
});
// 天猫国际
$(function(){
  var str3 = 
  `
  <a class="grid one-grid color-type-purple " href="#">
    <div class="floor-item-content-wrap">
      <div class="title">识货</div>
      <div class="sub-title">每日精选新鲜好货</div>
      <img src="https://img.alicdn.com/tps/i4/TB1Njg2bjuhSKJjSspmSuwQDpXa.jpg">
      <div class="item-activity-icon" style="display:none"></div>
    </div>
  </a>
  `;
  for(var i=0;i<json3.length;i++){
    str3 += `
    <a class="grid one-grid-price " href="" >
      <div class="floor-item-content-wrap">
        <div class="floor-item-tag color-type-green" style="visibility:hidden"></div>
        <img class="floor-item-img"
          src="${json3[i].img_src}">
        <div class="floor-item-title">${json3[i].floor_title}</div>
        <div class="floor-price">${json3[i].floor_price}</div>
        <div class="floor-item-reason" style="display:none">
          <div class="floor-item-reason-content"></div>
        </div>
        <div class="item-activity-icon" style="display:none"></div>
      </div>
    </a>
    `
  };
  $("#floor-tmgj .middle-column-con").html(str3);
})
// 美丽人生
$(function(){
  var str4 = "";
  for(var i=0;i<json4.length;i++){
    str4 += `
    <a class="grid one-grid-price " href="" >
      <div class="floor-item-content-wrap">
        <div class="floor-item-tag color-type-green" style="visibility:hidden"></div>
        <img class="floor-item-img"
          src="${json4[i].img_src}">
        <div class="floor-item-title">${json4[i].floor_title}</div>
        <div class="floor-price">${json4[i].floor_price}</div>
        <div class="floor-item-reason" style="display:none">
          <div class="floor-item-reason-content"></div>
        </div>
        <div class="item-activity-icon" style="display:none"></div>
      </div>
    </a>
    `
  };
  $("#floor-mlrs .middle-column-con").html(str4);
});

// 潮电酷玩
$(function(){
  var str5 = "";
  for(var i=0;i<json5.length;i++){
    str5 += `
    <a class="grid one-grid-price " href="" >
      <div class="floor-item-content-wrap">
        <div class="floor-item-tag color-type-green" style="visibility:hidden"></div>
        <img class="floor-item-img"
          src="${json5[i].img_src}">
        <div class="floor-item-title">${json5[i].floor_title}</div>
        <div class="floor-price">${json5[i].floor_price}</div>
        <div class="floor-item-reason" style="display:none">
          <div class="floor-item-reason-content"></div>
        </div>
        <div class="item-activity-icon" style="display:none"></div>
      </div>
    </a>
    `
  };
  $("#floor-cdkw .middle-column-con").html(str5);
});

// 居家生活
$(function(){
  var str6 = "";
  for(var i=0;i<json6.length;i++){
    str6 += `
    <a class="grid one-grid-price " href="" >
      <div class="floor-item-content-wrap">
        <div class="floor-item-tag color-type-green" style="visibility:hidden"></div>
        <img class="floor-item-img"
          src="${json6[i].img_src}">
        <div class="floor-item-title">${json6[i].floor_title}</div>
        <div class="floor-price">${json6[i].floor_price}</div>
        <div class="floor-item-reason" style="display:none">
          <div class="floor-item-reason-content"></div>
        </div>
        <div class="item-activity-icon" style="display:none"></div>
      </div>
    </a>
    `
  };
  $("#floor-jjsh .middle-column-con").html(str6);
});

// 打造爱巢
$(function(){
  var str7 = "";
  for(var i=0;i<json7.length;i++){
    str7 += `
    <a class="grid one-grid-price " href="" >
      <div class="floor-item-content-wrap">
        <div class="floor-item-tag color-type-green" style="visibility:hidden"></div>
        <img class="floor-item-img"
          src="${json7[i].img_src}">
        <div class="floor-item-title">${json7[i].floor_title}</div>
        <div class="floor-price">${json7[i].floor_price}</div>
        <div class="floor-item-reason" style="display:none">
          <div class="floor-item-reason-content"></div>
        </div>
        <div class="item-activity-icon" style="display:none"></div>
      </div>
    </a>
    `
  };
  $("#floor-dzac .middle-column-con").html(str7);
});

// 户外出行
$(function(){
  var str8 = "";
  for(var i=0;i<json8.length;i++){
    str8 += `
    <a class="grid one-grid-price " href="" >
      <div class="floor-item-content-wrap">
        <div class="floor-item-tag color-type-green" style="visibility:hidden"></div>
        <img class="floor-item-img"
          src="${json8[i].img_src}">
        <div class="floor-item-title">${json8[i].floor_title}</div>
        <div class="floor-price">${json8[i].floor_price}</div>
        <div class="floor-item-reason" style="display:none">
          <div class="floor-item-reason-content"></div>
        </div>
        <div class="item-activity-icon" style="display:none"></div>
      </div>
    </a>
    `
  };
  $("#floor-hwcx .middle-column-con").html(str8);
});

// 猜你喜欢
$(function(){
  var str9 = "";
  for(var i=0;i<json9.length;i++){
    str9 += `
    <li class="wonderful-item ">
      <a class="card-item "href="#">
        <span class="item-pic">
          <img src="${json9[i].img_src}"
            width="100%">
        </span>
        <span class="item-info">
          <span class="item-desc">
            <span class="item-name">${json9[i].item_name}</span>
          </span>
          <span class="item-detail">
            <span class="item-price">
              <span class="mui-price  ">
                <span class="mui-price-rmb">${json9[i].mui_price_rmb}</span>
                <span class="mui-price-integer">${json9[i].mui_price_integer}</span>
                <span class="mui-price-decimal">${json9[i].mui_price_decimal}</span>
              </span>
            </span>
          </span>
        </span>
      </a>
    </li>
    `
  };
  $(".wonderful-line").html(str9);
});