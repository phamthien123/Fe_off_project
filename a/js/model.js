loadStorage = () => {
    return JSON.parse(localStorage.getItem("LIST_TASK")) ;
}

saveStorage = (items) => {
    localStorage.setItem("LIST_TASK", JSON.stringify(items));
}
        


listItems = () => {
  let items = loadStorage() ;
  if(items === null) items = [];  // 
  return items;
}



deleteItem = (id) => {
  console.log(id);
  let items = listItems();  // [ {id,name,level}, {id,name,level}, {id,name,level}]
  items = items.filter(item => item.id !== id);
  saveStorage(items);
  // xoá công việc trong items có id = id được truyền vào
  return items;
}

addItem = (id,name,thumb,link) => {
    let taskNew = {id: id, name: name,thumb:thumb ,link: link,};
    let items = listItems();
    items.push(taskNew);
    // Lưu item vào storgare
    saveStorage(items);
    return items;
}


