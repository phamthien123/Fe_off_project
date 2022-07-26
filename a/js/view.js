showCategoryInMenu = () => {
  $.getJSON(API_PREFIX + "categories_news", function (data) {
    let xhtml = "";
    $.each(data, function (key, val) {
      xhtml += `<li><a href="category.html?id=${val.id}" onClick="funcLoadTile('${val.id}', '${val.name} ')">
      <i class="fa-solid fa-angle-right" style="margin-right:5px"></i>
      ${val.name}</a></li>`;
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
        let funclike = `onClick="funcHeart('${val.id}', '${val.title}', '${val.thumb}', 
         '${val.link}','${val.publish_date}','${val.description}')"`;
        let funcDeleteLike = `<a href="javascript:void(0)" class="btn1" onClick="funcDeleteHeart('${val.id}')">Bỏ Thích</a>`;
        let heart = `<i class="fa fa-heart" aria-hidden="true"></i>`;
        let likedData = listHearts();
        let TestLike = likedData.find((element) => element.id == val.id);
        if (TestLike) {
          heart = `${funcDeleteLike}`;
        }
        let ShowDate = new Date(val.publish_date);
        xhtml += `<article class="blog_item" >
            <div class="blog_item_img">
            <img class="card-img rounded-0" src="${
              val.thumb
            }" alt="" style="margin-top: 1px">
        </div>
        <div class="blog_details">
            <a class="d-inline-block" href="${
              val.link
            }" onClick="funcViewArticle('${val.id}', '${val.title}', '${
          val.thumb
        }', '${val.link}')" target="_blank" >
                <h2>${val.title}</h2>
            </a>
            <p>${val.description}</p>
            <ul class="blog-info-link">
                <li><a href="#"><i class="fa fa-calendar-check"></i>${ShowDate.toLocaleDateString()}
                <a href="javascript:void(0)" ${funclike}>${heart}</a>
                </a></li> 
            </ul>
        </div>
        </article>`;
      });
      elmAreaCategoryItems.html(xhtml);
    }
  );
};

showSearch = (keyword) => {
  $.getJSON(
    `http://apiforlearning.zendvn.com/api/articles/search?q=${keyword}&offset=0&limit=10&sort_by=id&sort_dir=desc`,
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let title = val.title.toLowerCase();
        let description = val.description.toLowerCase();
        if (
          title.includes(" " + keyword + " ") ||
          description.includes(" " + keyword + " ")
        ) {
          let btnLike = `<a href="#" class="btn1" onClick="funcHeart('${val.id}', '${val.title}', '${val.thumb}', 
        '${val.link}','${val.publish_date}','${val.description}')">Yêu thích</a>`;
          let ShowDate = new Date(val.publish_date);
          let titleHighlight = val.title.replace(
            new RegExp(keyword, "ig"),
            "<a class='highlight'>" + keyword + "</a>"
          );
          xhtml +=
            `<article class="blog_item" >
            <div class="blog_item_img">
            <img class="card-img rounded-0" src="${val.thumb}" alt="" style="margin-top: 1px">
        </div>
        <div class="blog_details">
            <a class="d-inline-block" href="${val.link}" onClick="funcViewArticle('${val.id}', '${val.title}', '${val.thumb}', '${val.link}')" target="_blank">
            ` +
            titleHighlight +
            `
            </a>
            <p>${val.description}</p>
            <ul class="blog-info-link">
                <li><a href="#"><i class="fa fa-calendar-check"></i>${ShowDate.toLocaleDateString()}
                ` +
            btnLike +
            `
                </a></li> 
            </ul>
        </div>
        </article>`;
        }
      });
      SearchValue.after(xhtml);
    }
  );
};

showListCategories = () => {
  $.getJSON(API_PREFIX + "categories_news", function (data) {
    let xhtml = "";
    $.each(data, function (key, val) {  
      letTitleName = `<p><i class="fa-solid fa-angle-right" style="margin-right:5px;"></i>${val.name}</p>`
      let tile = listTitle();
      if (tile.find((element) => element.id == val.id)) {
        letTitleName = `<p class="plist"><i class="fa-solid fa-angle-right" style="margin-right:5px;"></i>${val.name}</p>`;
      }
      xhtml +=  `<li>
          <a href="category.html?id=${val.id}" class="d-flex">
          <p>${letTitleName}</p>
          </a>
      </li>`;
    });
    List_category.after(xhtml);
  });
};

showListTitle = (title) => {
    let xhtml = "";
    $.each(title, function (key, val) {  
      let title = listTitle();
      if (title.find((element) => element.id == val.id)) {
        letTitleName = `${val.name}`;
      }
      xhtml +=  `${letTitleName}`;
      console.log(letTitleName);
    });
    elmTitle.html(xhtml);
  }

showGold = () => {
  $.getJSON("http://apiforlearning.zendvn.com/api/get-gold", function (data) {
    let xhtml = ``;
    $.each(data, function (key, val) {
      xhtml += `
              <tr>        
              <td>${val.type}</td>
              <td>${val.buy}</td>
              <td>${val.sell}</td> 
              </tr>`;
      $("#table-api").html(xhtml);
    });
  });
};

showCoin = () => {
  $.getJSON(API_PREFIX + "get-coin", function (data) {
    let xhtml = ``;
    $.each(data, function (key, val) {
      price = val.price.toFixed(2);
      let showprice = val.percent_change_24h.toFixed(3);
      let classPrice = val.percent_change_24h > 0 ? "green" : "red";
      xhtml += `
        <tr>        
        <td>${val.name}</td>
        <td >${price}</td>
        <td style="color:${classPrice}">${showprice}%</td> 
        </tr>`;
    });
    $("#table-Coins").after(xhtml);
  });
};

showLatestArticle = (total) => {
  // Đổ dữ liệu ra category news
  $.getJSON(
    API_PREFIX + `articles?offset=5&limit=${total}&sort_by=id&sort_dir=desc`,
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let ShowDate = new Date(val.publish_date);
        xhtml += `<div class="trend-top-img">
                           <img src="${val.thumb}" alt="">
                           <div class="trend-top-cap">
                               <span class="bgr" data-animation="fadeInUp" data-delay=".2s" data-duration="1000ms">${
                                 val.category.name
                               }</span>
                            <h2><a href=" ${
                              val.link
                            }" target="_blank data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms">${
          val.title
        }</a></h2>
                          <p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms">${ShowDate.toLocaleDateString()}</p>
                   </div>
              </div>`;
      });
      elmAreaTrendingNew.html(xhtml);
    }
  );
};

showRightArticle = (total) => {
  // Đổ dữ liệu ra category news
  $.getJSON(
    API_PREFIX + `articles?offset=6&limit=${total}&sort_by=id&sort_dir=desc`,
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let ShowDate = new Date(val.publish_date);
        xhtml += `<div class="trend-top-img">
            <img src="${val.thumb}" alt="" class="img-right">
            <div class="trend-top-cap trend-top-cap2">
                <span class="bgb">${val.category.name}</span>
                <h2><a href=" ${val.link}" target="_blank class="titleright">${
          val.title
        }</a></h2>
                <p>${ShowDate.toLocaleDateString()}</p>
            </div>
        </div> `;
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
        let ShowDate = new Date(val.publish_date);
        xhtml += `  <div class="weekly2-single">
        <div class="weekly2-img">
            <img src="${val.thumb}" alt="">
        </div>
        <div class="weekly2-caption">
            <h4><a href="${val.link}">${val.title}</a></h4>
            <p>${ShowDate.toLocaleDateString()}</p>
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
        `categories_news/${value}/articles?offset=7&limit=3&sort_by=id&sort_dir=desc`,
      function (data) {
        xhtml = `<div class="section-tittle mb-30">
        <h3>${data[0].category.name}</h3>
    </div>
     `;
        let aricalRight = "";
        $.each(data, function (key, val) {
          let ShowDate = new Date(val.publish_date);
          aricalRight += `
            <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                <div class="whats-right-single mb-20">
                      <div class="whats-right-img">
                              <img src="${val.thumb}" alt="">
                      </div>
                      <div class="whats-right-cap">
                              <h4><a href="${val.link}">${val.title}</a></h4>
                              <br/>
                              <p>${ShowDate.toLocaleDateString()}</p> 
                      </div>
                  </div>
            </div>`;
        });
        let ShowDate1 = new Date(data[0].publish_date);
        xhtml +=
          `
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">       
          <div class="row">
            <div class="col-xl-6 col-lg-12">
              <div class="whats-news-single mb-40 mb-40">
                    <div class="whates-img">
                        <img src="${data[0].thumb}" alt="">
                    </div>
                    <div class="whates-caption">
                        <h4><a href="${data[0].link}">${data[0].title}</a></h4>
                        <p>${ShowDate1.toLocaleDateString()}</p> 
                        <p>${data[0].description}</p>
                    </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-12">
                    <div class="row">
            ` +
          aricalRight +
          `
            </div>
            </div>
          </div>
        </div>`;
        Area_left_content.after(xhtml);
      }
    );
  });
};
showArticleViewed = (data) => {
  // Đổ dữ liệu ra category news
  Article_viewed.nextAll("div").remove();
  let xhtml = "";
  let valueSeen = "";
  let TitleTin = "";
  $.each(data, function (key, val) {
    if (val.id) {
      TitleTin = '<h3 style="color: red;margin-top: 10px;font-size: 40px;font-weight: 700;margin-left: 15px;"> Tin Đã Xem</h3>';
    }
    valueSeen += `
    <div class="weekly3-single">
    <div class="weekly3-img">
        <img src="${val.thumb}" alt="" class="imgSeen">
    </div>
    <div class="weekly3-caption" style="padding-bottom: 40px">
        <h4><a href="${val.link}" target="_blank" >${val.name}</a></h4>
        <a href="javascript:void(0)" onClick="funcDeleteArticleViewed('${val.id}')" class="abc">Xóa</a> 
    </div>
    </div>  `;
  });
  xhtml +=
    TitleTin +
    `<div class="weekly3-news-active dot-style d-flex">
          ` +
    valueSeen +
    `
    </div>`;
  Article_viewed.after(xhtml);
};

showHeart = (data) => {
  // Đổ dữ liệu ra category news
  let xhtml = "";
  $.each(data, function (key, val) {
    let ShowDate = new Date(val.publish_date);
    xhtml += `<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">       
      <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="whats-news-single mb-40 mb-40">
                  <div class="whates-img">
                      <img src="${val.thumb}"alt="" class="img-res">
                  </div>
              </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="whates-caption whates-caption2">
                <h4><a href="#" class="a_name">${val.name}</a></h4>
                <p>${val.description}</p>
                <span>${ShowDate.toLocaleDateString()}
                <a href="javascript:void(0)" class="btn1" onClick="funcDeleteHeart('${
                  val.id
                }')">Bỏ Thích</a></span>
         </div>
          </div>
        </div> 
      </div>
  </div> 
      `;
  });
  nav_tabContent.after(xhtml);
};

showErorrHeart = () => {
  // Đổ dữ liệu ra category news
  let xhtml = "";
  xhtml += `<h1 style="color:red">Bạn Chưa Có Yêu Thích Tin Nào </h1>`;
  noHeart.html(xhtml);
};

showvideo = () => {
  // Đổ dữ liệu ra category news
  $.getJSON(
    `http://apiforlearning.zendvn.com/api/playlists/8/videos?offset=0&limit=4&sort_by=id&sort_dir=asc`,
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let result = val.title;
        results = result.slice(19);
        let thumbnailObj = JSON.parse(val.thumbnail);
        let funclikevideo = `onClick="funcLikeVideo('${val.id}', '${val.title}')"`;
        let video = `<i class="fa fa-heart" aria-hidden="true"></i>`;
        let funcDeleteLike = `<a href="javascript:void(0)" onClick="funcDeleteVideo('${val.id}')"><i class="fa fa-heart" style="color: red;" aria-hidden="true"></i></a>`;
        let likeVideo = listVideos();
        if (likeVideo.find((element) => element.id == val.id)) {
          video = `${funcDeleteLike}`;
        }
        xhtml += ` 
        <div class="col-12 col-md-3">
            <div class="single-video-post">
                <div class="video-post-thumb">
                    <img src="${thumbnailObj.high.url}" alt="">
                    <a href="https://www.youtube.com/embed/${val.youtube_id}" class="videobtn" target="_blank"><i class="fa fa-play" aria-hidden="true"></i></a>
                </div>
                <h5><a href="https://www.youtube.com/embed/${val.youtube_id}" target="_blank">${results}</a><a href="javascript:void(0)" ${funclikevideo}>${video}</a></h5>
                </div>
        </div>`;
      });
      video_containers.after(xhtml);
    }
  );
};


showHeartVideo = (data) => {
  // Đổ dữ liệu ra category news
  let xhtml = "";
  $.each(data, function (key, val) {
    xhtml += `<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">       
      <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="whats-news-single mb-40 mb-40">
                  <div class="whates-img">
                      <img src="${val.thumbnailObj}"alt="" class="img-res">
                  </div>
              </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="whates-caption whates-caption2">
                <h4><a href="#" class="a_name">${val.name}</a></h4>
                <span><a href="javascript:void(0)" class="btn1" onClick="funcDeleteVideo('${val.id}')">Bỏ Thích</a>
                </span>
         </div>
          </div>
        </div> 
      </div>
  </div> 
      `;
  });
  nav_Video.after(xhtml);
};

showErorrVideo = () => {
  // Đổ dữ liệu ra category news
  let xhtml = "";
  xhtml += `<h1 style="color:red">Bạn Chưa Có Yêu Thích Video Nào </h1>`;
  noVideo.html(xhtml);
};

showAllvideo = () => {
  // Đổ dữ liệu ra category news
  $.getJSON(
    `http://apiforlearning.zendvn.com/api/playlists/8/videos?offset=0&limit=16&sort_by=id&sort_dir=asc`,
    function (data) {
      let xhtml = "";
      $.each(data, function (key, val) {
        let result = val.title;
        results = result.slice(19);
        let thumbnailObj = JSON.parse(val.thumbnail);
        let funclikevideo = `onClick="funcLikeVideo('${val.id}', '${val.title}')"`;
        let video = `<i class="fa fa-heart" aria-hidden="true"></i>`;
        let funcDeleteLike = `<a href="javascript:void(0)" onClick="funcDeleteVideo('${val.id}')"><i class="fa fa-heart" style="color: red;" aria-hidden="true"></i></a>`;
        let likeVideo = listVideos();
        if (likeVideo.find((element) => element.id == val.id)) {
          video = `${funcDeleteLike}`;
        }
        xhtml += ` 
        <div class="col-12 col-md-3">
            <div class="single-video-post">
                <div class="video-post-thumb">
                    <img src="${thumbnailObj.high.url}" alt="">
                    <a href="https://www.youtube.com/embed/${val.youtube_id}" class="videobtn"><i class="fa fa-play" aria-hidden="true"></i></a>
                </div>
                <h5><a href="https://www.youtube.com/embed/${val.youtube_id}">${results}</a><a href="javascript:void(0)" ${funclikevideo}>${video}</a></h5>
                </div>
        </div>`;
    });
      video_All.after(xhtml);
    }
  );
};
