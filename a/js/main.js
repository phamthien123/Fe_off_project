//CategoryInMenu
showCategoryInMenu();

//ArticleInCategory
let categoryID = $.urlParam('id'); 
if(categoryID !== null) {
    showArticleInCategory(categoryID);
}

//Giá Vàng
showGold();

//Giá Coins
showCoin();

showLatestArticle(1); 

showRightArticle(2);

showRandom(4);

showCategoryDetail();

 // Hiển thị bài viết đã xem
 let data = listItems();
 showArticleViewed(data);

  // Hiển thị bài viết đã xem
  let heart = listItems();
  showArticleHeart(heart);