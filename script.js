import { taskId,createMyElement } from "./table_func.js"; // importing  functions

// getting  input form the html document
const inp = document.getElementById("num");
const button = document.getElementById("btn");
const table_container = document.getElementById("table-container");

// storing the table objects
let tables = []


//getting data from the local storage
getTables();

//removing the table 
function  closeTable(){
   const id = this.id; 
   this.parentElement.parentElement.remove();    
   const taskArr = tables.filter(item=> item.id !== id );
   tables = taskArr;
   setTables(); 
}

//creating the  table elements
function createTableElements({num,id}){

  const table = createMyElement({tag:"div",classAttribute:"table"});
  const table_head = createMyElement({tag:"div",classAttribute:"table-head"});
  const table_title = createMyElement({tag:"h4",classAttribute:"table-title",value:`table ${num}`})
  const icon = createMyElement({tag:"i",classAttribute:"fa fa-times",id:id}); 
  icon.addEventListener("click",closeTable);
  table_head.append(table_title);
  table_head.append(icon);
  table.append(table_head);
  return table
  
}

// creating the table
function createTable({num,id}){

      const table = createTableElements({num,id})     
      const table_body = createMyElement({tag:"div",classAttribute:"table-body"});

        for(let i = 1 ; i <21 ; i++){
          const element =  createMyElement({tag:"div",classAttribute:"value",value:`${i} * ${num} = ${i * num}`});;
          table_body.append(element)
        }

        table.append(table_body);
        table_container.append(table);
}

//all functionalities
function multi(){
    const num = Number(inp.value);
    inp.value = "";
    const regExp =  /^[1-9]{1,3}$/
    if(regExp.test(num)){
      const id = taskId();
      const obj = {id:id,num:num}
      tables.push(obj)
      setTables();
      createTable(obj)
    }

    else{
      alert("please Enter the  number from 1 to 100");
    }
   
}

// enter event function
function enter(event){
  if(event.keyCode === 13){
     multi()
  }
}

// getting data storage function
function getTables(){
  let strTable =  localStorage.getItem('tables');
  if(!strTable){return}
  strTable = JSON.parse(strTable);
  strTable.forEach(item=>{
     tables.push(item)
     createTable(item)}
  )

}

// setting data in the storage function
function setTables(){
  localStorage.setItem('tables',JSON.stringify(tables))
}

 button.addEventListener("click" ,multi)

 inp.addEventListener("keyup",enter)


