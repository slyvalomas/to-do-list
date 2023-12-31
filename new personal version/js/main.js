
const itemEntryForm=document.getElementById("itemEntryForm");
const listItems=document.getElementById("listItems");
const NewItem=document.getElementById("NewItem");
const clearItems = document.getElementById("clearItems");



let dataBase =[]
//localStorage.setItem("realDataBase",JSON.stringify(dataBase)); //remove is after anstaling the local storage
if (localStorage.getItem("realDataBase")){
    console.log("brahim")
}else{
    localStorage.setItem("realDataBase",JSON.stringify(dataBase));
}

dataBase = JSON.parse(localStorage.getItem("realDataBase"))

clearItems.addEventListener("click",()=>{
    checkY()
});
itemEntryForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    if (NewItem.value!=""){
        const itemValue=NewItem.value;
    dataBase.push(itemValue);
    localStorage.setItem("realDataBase",JSON.stringify(dataBase));
    NewItem.value = "";
    }else{
        console.log("add something")
    }
    
});
let NewData =JSON.parse(localStorage.getItem("realDataBase"))
function renderPosts(){
    for(let i=0;i<NewData.length;i++){
    let RealDataBase=localStorage.setItem("realDataBase",JSON.stringify(dataBase));
    const  div=document.createElement("div")
    div.className="item"
    const checkbox = document.createElement("input")
    checkbox.type="checkbox"
    checkbox.className="check"
    checkbox.id= i
    checkbox.tabIndex=0
    const label = document.createElement("label")
    label.htmlFor=i
    label.textContent=NewData[i]
    div.appendChild(checkbox)
    div.appendChild(label)
    listItems.appendChild(div)
    }
}
renderPosts()


function checkY(){
    for(let i=0;i<NewData.length;i++){
        const checkCheck=document.getElementById(`${i}`)
        if (checkCheck.checked){
           
           dataBase.pop(i)
           removeValue(i)
        }else{
            console.log("CHECK ANY BOX")
        }
        
        }
        
}

function removeValue(x){
    Array.prototype.remove = function(...indicesToRemove) {
        indicesToRemove.sort((a, b) => b - a);
        indicesToRemove.forEach(index => {
            if (index >= 0 && index < this.length) {
                this.splice(index, 1);
            } else {
                console.log(`Index ${index} is out of bounds`);
            }
        });
    };
    dataBase = []
    dataBase = JSON.parse(localStorage.getItem("realDataBase"))
    console.log(dataBase)
    dataBase.remove(x)
    localStorage.setItem("realDataBase",JSON.stringify(dataBase));

    console.log(dataBase)
}
