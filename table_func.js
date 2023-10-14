function taskId(){
    const date  = new Date();
    const year=date.getFullYear().toString();
    const month=date.getMonth().toString();
    const toDate=date.getDate().toString();
    const hour=date.getHours().toString();
    const minute=date.getMinutes().toString();
    const sec=date.getSeconds().toString();
    const millisec=date.getMilliseconds().toString();
    const id = year + month + toDate + hour + minute + sec + millisec;
    return id;
 }


 function createMyElement(obj){
    const newElement = document.createElement(obj.tag);
    newElement.className = obj.classAttribute;
    if(obj.id){ newElement.id = obj.id}
    if(obj.value){newElement.innerText = obj.value}
    return newElement;
 }


export {taskId,createMyElement}