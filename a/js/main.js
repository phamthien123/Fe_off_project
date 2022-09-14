//CategoryInMenu
showCategoryInMenu();

//ArticleInCategory
let categoryID = $.urlParam('id'); 
if(categoryID !== null) {
    showArticleInCategory(categoryID);
}
showListCategories()
//Giá Vàng
showGold();

//Giá Coins
showCoin();

showLatestArticle(1); 

showRightArticle(2)

showRandom(4);

showCategoryDetail();

 // Hiển thị bài viết đã xem
 let data = listItems();
 showArticleViewed(data);

 let data1 = listHearts();

 if(data1 == ""){
    showErorrHeart(data1)
 }
 else{
    showHeart(data1)  
 }
 
 showvideo();

 showAllVideo();

 let video = listVideos();

 if(video == ""){
    showErorrVideo(video)
 }
 else{
    showHeartVideo(video)
 }
 

funcSearch = () => {
   let keyword =  elemInputSearch.value;
   
   if (keyword.length === 0) {
      alert("Please Nhập từ cần tìm ");
   }
   else{
      location.replace(`Search.html?keyword=${keyword}`);
   }
}

let Param = $.urlParam('keyword'); 
showSearch(Param)

   









