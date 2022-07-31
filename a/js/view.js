showCategoryInMenu = () => {
  $.getJSON(API_PREFIX + "categories_news", function (data) {
    let xhtml = "";
    $.each(data, function (key, val) {
      xhtml += `<li><a href="category.html?id=${val.id}"><i class="fa-solid fa-angle-right" style="margin-right:5px"></i>${val.name}</a></li>`;
    });
    elmAreaCategoryNews.html(xhtml);
  });
};

showArticleInCategory = (categoryID) => {
  $.getJSON(
    API_PREFIX +
      `categories_news/${categoryID}/articles?offset=0&limit=10&sort_by=id&sort_dir=desc`,
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        xhtml += `<article class="blog_item" >
            <div class="blog_item_img">
            <img class="card-img rounded-0" src="${val.thumb}" alt="">
        </div>
        <div class="blog_details">
            <a class="d-inline-block" href="${val.link}" onClick="funcViewArticle('${val.id}', '${val.title}', '${val.thumb}', '${val.link}')" target="_blank" >
                <h2>${val.title}</h2>
            </a>
            <p>${val.description}</p>
            <ul class="blog-info-link">
                <li><a href="#"><i class="fa fa-user"></i> Travel, Lifestyle</a></li>
                <li><a href="#"><i class="fa fa-calendar-check"></i> 26/07/2022</a></li>
            </ul>
        </div>
        </article>`;
      });
      elmAreaCategoryItems.html(xhtml);
    }
  );
};

showGold = () => {
  $.getJSON("http://apiforlearning.zendvn.com/api/get-gold", function (data) {
    let xhtml = ``;
    $.each(data, function (key, val) {
      xhtml += `
              <tr>        
              <td>${val.type}</td>
              <td>${val.buy}</td>
              <td>${val.sell}</td> </tr>`;
      $("#table-api").html(xhtml);
    });
  });
};

showCoin = () => {
  $.getJSON("http://apiforlearning.zendvn.com/api/get-coin", function (data) {
    let xhtml = ``;
    $.each(data, function (key, val) {
      xhtml += `
        <tr>        
        <td>${val.name}</td>
        <td>${Math.round(val.price * 10000) / 100}</td>
        <td>${val.percent_change_24h} %</td> </tr>`;
      $("#table-Coins").html(xhtml);
    });
  });
};

showLatestArticle = (total) => {
  // Đổ dữ liệu ra category news

  $.getJSON(
    API_PREFIX + `articles?offset=0&limit=${total}&sort_by=id&sort_dir=desc`,
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        xhtml += `<div class="trend-top-img">
                           <img src="${val.thumb}" alt="">
                           <div class="trend-top-cap">
                               <span class="bgr" data-animation="fadeInUp" data-delay=".2s" data-duration="1000ms">${val.category.name}</span>
                              <h2><a href="latest_news.html" data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms">${val.title}</a></h2>
                               <p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms">${val.publish_date}</p>
                           </div>
                       </div>
                       `;
      });
      elmAreaTrendingNew.html(xhtml);
    }
  );
};

showRightArticle = (total) => {
  // Đổ dữ liệu ra category news

  $.getJSON(
    API_PREFIX + `articles?offset=1&limit=${total}&sort_by=id&sort_dir=desc`,
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        xhtml += `<div class="trend-top-img">
            <img src="${val.thumb}" alt="">
            <div class="trend-top-cap trend-top-cap2">
                <span class="bgb">${val.category.name}</span>
                <h2><a href="latest_news.html">${val.title}</a></h2>
                <p>${val.publish_date}  </p>
            </div>
        </div>
                       `;
      });
      trending_right.html(xhtml);
    }
  );
};
showRightArticle = (total) => {
  // Đổ dữ liệu ra category news

  $.getJSON(
    API_PREFIX + `articles?offset=2&limit=${total}&sort_by=id&sort_dir=desc`,
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        xhtml += `<div class="trend-top-img">
            <img src="${val.thumb}" alt="">
            <div class="trend-top-cap trend-top-cap2">
                <span class="bgb">${val.category.name}</span>
                <h2><a href="latest_news.html">${val.title}</a></h2>
                <p>${val.publish_date}  </p>
            </div>
        </div>
                       `;
      });
      trending_right.html(xhtml);
    }
  );
};

showRightArticle = (total) => {
  // Đổ dữ liệu ra category news

  $.getJSON(
    API_PREFIX + `articles?offset=2&limit=${total}&sort_by=id&sort_dir=desc`,
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        xhtml += `<div class="trend-top-img">
            <img src="${val.thumb}" alt="">
            <div class="trend-top-cap trend-top-cap2">
                <span class="bgb">${val.category.name}</span>
                <h2><a href="latest_news.html">${val.title}</a></h2>
                <p>${val.publish_date}</p>
            </div>
        </div>
                       `;
      });
      trending_right.html(xhtml);
    }
  );
};

showRandom = (total) => {
  // Đổ dữ liệu ra category news
  $.getJSON(
    API_PREFIX + `articles?offset=4&limit=${total}&sort_by=id&sort_dir=desc`,
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        xhtml += `  <div class="weekly2-single">
        <div class="weekly2-img">
            <img src="${val.thumb}" alt="">
        </div>
        <div class="weekly2-caption">
            <h4><a href="#">Scarlett’s disappointment at latest accolade</a></h4>
            <p>Jhon  |  2 hours ago</p>
        </div>
    </div> `;
      });
      trending_random.html(xhtml);
    }
  );
};

showCategoryDetail = () => {
  $.each(arrCategoryInHome, function (key, value) {
    let xhtml = ``;
    $.getJSON(
      API_PREFIX +
        `categories_news/${value}/articles?offset=3&limit=1&sort_by=id&sort_dir=desc`,
      function (data) {
        xhtml = `<div class="section-tittle mb-30">
        <h3>${data[0].category.name }</h3>
    </div> `;
        $.each(data, function (key, val) {
          xhtml += `<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">       
          <div class="row">
              <!-- Left Details Caption -->
              <div class="col-xl-6 col-lg-12">
                  <div class="whats-news-single mb-40 mb-40">
                      <div class="whates-img">
                          <img src="${val.thumb}" alt="">
                      </div>
                      <div class="whates-caption">
                          <h4><a href="latest_news.html">${val.title}</a></h4>
                          <span>${val.publish_date}</span>
                          <p>${val.description}</p>
                      </div>
                  </div>
              </div>
              
          `;                  
        $.getJSON(
                  API_PREFIX +
                      `categories_news/${value}/articles?offset=4&limit=1&sort_by=id&sort_dir=desc`,
                      function (data) {
                            $.each(data, function (key, val) {
                                  xhtml +=` <!-- Right single caption -->
                                  <div class="col-xl-6 col-lg-12">
                                      <div class="row">
                                          <!-- single -->
                                          <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                              <div class="whats-right-single mb-20">
                                                  <div class="whats-right-img">
                                                      <img src="${val.thumb}" alt="">
                                                  </div>
                                                  <div class="whats-right-cap">
                                                  <span></span>
                                                      <h4><a href="latest_news.html">${val.title}</a></h4>
                                                      <p>Jun 19, 2020</p> 
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>`;
                      });
              Area_left_content.after(xhtml);
             });
          });
       }
    );
  });
}

// Đổ danh sách bài viết đã xem
showArticleViewed = (data) => {
  // Đổ dữ liệu ra category news
  Article_viewed.nextAll('div').remove();
  
  let xhtml = '';
  $.each( data, function( key, val ) {
      xhtml += `   <div class="weekly3-news-active dot-style d-flex" >
      <div class="weekly3-single">
          <div class="weekly3-img">
              <img src="${val.thumb}" alt="">
          </div>
          <div class="weekly3-caption">
              <h4><a href=" ${val.link}"target="_blank" >${val.name}</a></h4>
              <p>19 Jan 2020</p>  
          </div>
          <a href="javascript:void(0)" onClick="funcDeleteArticleViewed('${val.id}')" class="post-cata cata-sm cata-success" style="color:green;font-size:20px">Xóa</a>
  </div> 
      `; 
  });
  Article_viewed.after(xhtml);
}



