let ul = document.getElementById('todo');
let addBtn = document.getElementById('add');
let addTask = document.getElementById('task');

let list = new Array();
let li = document.createElement('li');
addBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    if(addTask.value.length != ""){
        list.push(addTask.value);
        console.log(list);
    ul.innerHTML +=`<li id="${list.length-1}" class="list">
          <input type="checkbox" id="todo-${list.length}" >
                    <label for="todo-${list.length}" class="custom-checkbox"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="transparent"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></label>
                    <label for="${list.length}" class="todo-text" onclick="toggleStrike()">${addTask.value}</label>
                    <button class="delete-button" onclick="complete(${list.length-1})"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
        </li>`;
    addTask.value="";
    }
})
 function complete(id){
    const element = document.getElementById(id);
    if(element){
    element.remove();
    }
    list.splice(id,1);
    const items = document.querySelectorAll('#todo li');
    items.forEach((item,index)=>{
        item.id=index; 
        const button = item.querySelector('.delete-button');
        button.setAttribute('onclick', `complete(${index})`);
    })   
 }
function toggleStrike(){
    const checkbox = document.getElementById(`todo-${list.length-1}`);
    const label = document.querySelector(".todo-text");
    if(checkbox.checked){
        label.style.textDecoration="line-through";
    }
    else{
        label.style.textDecoration="none";
    }
}
 