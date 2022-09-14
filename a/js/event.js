
funcViewArticle = (id, title, thumb, link ) => {
    let items = [];
    items = addItem(id, title, thumb, link);
    // showArticleViewed(); 
}
funcDeleteArticleViewed= (id) => {
    let text = "Bạn Có Chắc Muốn Xóa";
    if (confirm(text) == true) {
        let items = deleteItem(id);
        showArticleViewed(items);
        $.notify("Xóa Thành Công", "error"); 
    } 
}


funcHeart= (id, title, thumb, link,publish_date,description) => {
    let items  = [];
    items = addHeart(id, title, thumb, link,publish_date,description);
    $.notify("Đã Thêm Vào Yêu Thích", "success"); 
}

funcDeleteHeart= (id) => {
    let text = "bạn muốn xóa"
    if (confirm(text) == true) {
        let items = deleteHeart(id);
        showHeart(items)
        $.notify("Xóa Thành Công", "error"); 
    } 
    
   
}

funcLikeVideo= (id, title) => {
    let items  = [];
    items = addVideo(id, title); 
    $.notify("Đã Thêm Vào Yêu Thích", "success"); 
}
funcDeleteVideo= (id) => {
    let text = "Bạn chắc chắn muốn bỏ yêu thích viết này";
    if (confirm(text) == true) {
        let items = deleteVideo(id);
        showHeart(items);
        $.notify("Xóa Thành Công", "error"); 
    } 
}









