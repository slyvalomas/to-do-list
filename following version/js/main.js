import ToDoList from './todolist.js'
import ToDoItem from './todoitem.js';


const toDoList = new ToDoList();

// launch app
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        initApp();
}
});

const initApp=()=>{
    //add listener
    const itemEntryForm = document.getElementById("itemEntryForm")
    itemEntryForm.addEventListener("submit",(event)=>{
        event.preventDefault();
        precessSubmission();
    })
    //Procedual
    //load list object
    refreshThePage()
}
const refreshThePage = ()=>{
    clearListDisplay();
    renderList();
    clearItemEntryField();
    setFocusOnItemEntry();
}
const clearListDisplay= ()=>{
    const parentElement=document.getElementById("listItems");
    deleteContent(parentElement)
}
const deleteContent = (parentElement)=>{
    let child = parentElement.lastElementChild;
    while(child){
        parentElement.removeChild(child)
        child =  parentElement.lastElementChild;
    }
}
const renderList =()=>{
    const list =toDoList.getList();
    list.forEach(item=>{
        buildListItem(item)
    })
} 
const buildListItem = (item)=>{
    const div = document.createElement("div");
    div.className="item";
    const check=document.createElement("input");
    check.type="checkbox";
    check.id = item.getId();
    check.tabIndex = 0;
    addClickListenerToCheckBox(check);
    const label  = document.createElement("label");
    label.htmlFor=item.getId();
    label.textContent = item.getItem();
    div.appendChild(check);
    div.appendChild(label);
    const container = document.getElementById("listItems");
    container.appendChild(div);
}
const addClickListenerToCheckBox = ()=>{
    checkbox.addEventListener("click",(event)=>{
        toDoList.removeItemFormList("checkbox.id");
        // TODO: remove from bla bla data
        setTimeout(() => {
            refreshThePage();
        }, 1000);
    });
}
const clearItemEntryField=()=>{
    document.getElementById("NewItem").value="";
};
const setFocusOnItemEntry = ()=>{
    document.getElementById("NewItem").focus()
};
const precessSubmission = () => {
    const newEntryText = getNewEntry();
    if (!newEntryText.length )  return;
    const nextItemId=calcNextItemId();
    const toDoItem = createNewItem(nextItemId,newEntryText);
    toDoList.addItemToList(toDoItem);
    refreshThePage();
}
const getNewEntry = ()=>{
    return document.getElementById("NewItem").value.trim();
}
const calcNextItemId = ()=>{
    let nextItemId = 1;
    const list = toDoList.getList();
    if (list.length>0){
        nextItemId = list[list.length -1].getId()+1;
    }
    return nextItemId;
}
const createNewItem = (itemId,itemText)=>{
    const toDO=new ToDoItem();
    toDO.setId(itemId);
    toDO.setItem(itemText);
    return toDO;
}















const toDoItem = new ToDoItem();



