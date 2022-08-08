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

showRightArticle(2)


showRandom(4);

showCategoryDetail();

showListCategories();  

 // Hiển thị bài viết đã xem
 let data = listItems();
 showArticleViewed(data);

 let data1 = listHearts();
 showHeart(data1)

 showvideo();

 showAllVideo();


 let video = listVideos();
 showHeartVideo(video)
