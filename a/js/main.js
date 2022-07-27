//Main-Menu
let elmAreaCategoryNews = $("ul#category-news");
const API_PREFIX = 'http://apiforlearning.zendvn.com/api/';

$.getJSON( API_PREFIX + "categories_news", function( data ) {
    let xhtml = '';
    $.each( data, function( key, val ) {
        xhtml += `<li><a href="category.html?id=${val.id}">${val.name}</a></li>`;
    });
    elmAreaCategoryNews.html(xhtml);
});


//urlParam Category
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null) {
       return null;
    }
    return decodeURI(results[1]) || 0;
}

let elmAreaCategoryItems = $("#list-blog-item");
let categories_id = $.urlParam("id");

$.getJSON(API_PREFIX + `categories_news/${categories_id}/articles?offset=0&limit=10&sort_by=id&sort_dir=desc`, function( data ) {   
    let xhtml = '';
    $.each( data, function( key, val ) {
        xhtml += `<article class="blog_item" >
        <div class="blog_item_img">
        <img class="card-img rounded-0" src="${val.thumb}" alt="">
    </div>
    <div class="blog_details">
        <a class="d-inline-block" href="single-blog.html">
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
});

//Giá Vàng
$.getJSON( "http://apiforlearning.zendvn.com/api/get-gold", function( data ) {
  let xhtml = ``
  $.each( data, function( key, val ) {
        xhtml += `
        <tr>        
        <td>${val.type}</td>
        <td>${val.buy}</td>
        <td>${val.sell}</td> </tr>`
       $("#table-api").html(xhtml)
     })
  });

//Giá Coins
$.getJSON("http://apiforlearning.zendvn.com/api/get-coin", function( data ) {
  let xhtml = ``
  $.each( data, function( key, val ) {
        xhtml += `
        <tr>        
        <td>${val.name}</td>
        <td>${val.price}</td>
        <td>${val.percent_change_24h} %</td> </tr>`
       $("#table-Coins").html(xhtml)
     })
  });