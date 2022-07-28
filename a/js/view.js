

showCategoryInMenu = () => {
    $.getJSON( API_PREFIX + "categories_news", function( data ) {
        let xhtml = '';
        $.each( data, function( key, val ) {
            xhtml += `<li><a href="category.html?id=${val.id}">${val.name}</a></li>`;
        });
        elmAreaCategoryNews.html(xhtml);
    });
}
   

showArticleInCategory = (categoryID) =>{
    $.getJSON(API_PREFIX + `categories_news/${categoryID}/articles?offset=0&limit=10&sort_by=id&sort_dir=desc`, function( data ) {   
        let xhtml = '';
        $.each( data, function( key, val ) {
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
    });
} 

showGold = () => {
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
}

showCoin = () => {
    $.getJSON("http://apiforlearning.zendvn.com/api/get-coin", function( data ) {
  let xhtml = ``;
  $.each( data, function( key, val ) {
        xhtml += `
        <tr>        
        <td>${val.name}</td>
        <td>${Math.round(val.price * 10000) / 100}</td>
        <td>${val.percent_change_24h} %</td> </tr>`
       $("#table-Coins").html(xhtml)
     })
  });
}