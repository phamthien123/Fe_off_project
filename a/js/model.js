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
  let items = listItems();  // [ {id,name,level}, {id,name,level}, {id,name,level}]
  items = items.filter(item => item.id !== id);
  saveStorage(items);
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


///Load Yêu Thích

loadStorageHeart = () => {
  return JSON.parse(localStorage.getItem("LIST_Heart")) ;
}

saveStorageHeart = (items) => {
  localStorage.setItem("LIST_Heart", JSON.stringify(items));
}
      
listHearts = () => {
let items = loadStorageHeart() ;
if(items === null) items = [];  // 
return items;
}

addHeart = (id,name,thumb,link,publish_date,description) => {
  let taskNew = {id: id, name: name,thumb:thumb ,link: link,publish_date:publish_date, description: description};
  let items = listHearts();
  items.push(taskNew);
  saveStorageHeart(items);
  return items;
}

deleteHeart = (id) => {
  let items = listHearts();  // [ {id,name,level}, {id,name,level}, {id,name,level}]
  items = items.filter(item => item.id !== id);
  saveStorageHeart(items);
  return items;
}




loadStorageVideo = () => {
  return JSON.parse(localStorage.getItem("LIST_Video")) ;
}

saveStorageVideo = (items) => {
  localStorage.setItem("LIST_Video", JSON.stringify(items));
}
      
listVideos = () => {
let items = loadStorageVideo() ;
if(items === null) items = [];  // 
return items;
}

addVideo = (id,name) => {
  let taskNew = {id: id, name: name};
  let items = listVideos();
  items.push(taskNew);
  saveStorageVideo(items);
  return items;
}

deleteVideo = (id) => {
  console.log(id);
  let items = listVideos();  // [ {id,name,level}, {id,name,level}, {id,name,level}]
  items = items.filter(item => item.id !== id);
  saveStorageVideo(items);
  return items;
}

funcSearch = () =>{
  
}