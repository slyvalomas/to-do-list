import ToDoItem from "./todoitem";
import todoList from "./todolist";




const TodoList= new todoList();

document.addEventListener("readystatechange" , (event)=>{
    if (event.target.readyState==="complete"){
        initApp();
    }
})
const initApp = () => {
    refreshPage();
    //ad listeners 
    // procedural
    // load list object
};
const refreshPage = ()=>{
    clearListDisplay();
    clearListDisplay();
    //clearItemEntryField()
    //setFocusOnItemEntry()
};
const clearListDisplay = () => {
    const parentElement= document.getElementById("listItems")
    deleteContent(parentElement)
}
const deleteContent=()=>{
    let child=parentElement.lastElementChild;
    while(child){
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}
const renderList = ()=>{
    const list =TodoList.getList();
    list.forEach(item=>{
        buildListItem(item);
    })
}
const buildListItem=(item)=>{
    const div=document.createElement("div");
    div.className="item";
    const check = document.createElement("input");
    check.type="checkbox";
    check.id = item.getId();
    check.tabIndex = 0;
    addClickCheckBox(check);
    const label=document.createElement("label");
    label.htmlFor=item.getId();
    label.textContent=item.getItem();
    div.appendChild(check);
    div.appendChild(label);
    const container = document.getElementById("listItem");
    container.appendChild("div");
}
const addClickCheckBox =(check)=>{
    check.addEventListener("click",(event)=>{
        TodoList.removeItemFromList(checkbox.id);
        // TODO remove:remove from p data
        setTimeout(()=>{
            refreshPage();
        },1000)
    })
}