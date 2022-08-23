
funcViewArticle = (id, title, thumb, link ) => {
    let items = [];
    items = addItem(id, title, thumb, link);
    // showArticleViewed(); 
}
funcDeleteArticleViewed= (id) => {
    let text = "DELETE!\nBạn chắc chắn muốn xoá bài viết này";
    if (confirm(text) == true) {
        let items = deleteItem(id);
        showArticleViewed(items);
    } 
}


funcHeart= (id, title, thumb, link,publish_date,description) => {
    let items  = [];
    items = addHeart(id, title, thumb, link,publish_date,description);
}

funcDeleteHeart= (id) => {
    let text = "Bạn chắc chắn muốn bỏ yêu thích viết này";
    if (confirm(text) == true) {
        let items = deleteHeart(id);
        showHeart(items);
    } 
}

funcLikeVideo= (id, title) => {
    let items  = [];
    items = addVideo(id, title);
    // showArticleViewed(); 
}







