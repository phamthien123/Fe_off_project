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