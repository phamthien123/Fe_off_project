
funcViewArticle = (id, title, thumb, link ) => {
    let items       = [];
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



