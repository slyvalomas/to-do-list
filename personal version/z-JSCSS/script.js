const NewItem = document.querySelector("#NewItem");
const button = document.querySelector(".button");
const clearItems = document.querySelector("#clearItems");
const listItems = document.querySelector("#listItems");

let data = JSON.parse(localStorage.getItem('data')) || [];
function renderList() {
    listItems.innerHTML = ""; 
    for (let i = 0; i < data.length; i++) {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.innerHTML = `
            <input class="check" type="checkbox" id="${i}" tabindex="0">
            <label for="${i}">${data[i]}</label>
        `;
        listItems.appendChild(itemDiv);
        
console.log(data[i])
    }
}

renderList();
for (let x = 0;  x<data.length; x++) {
    const checkBox=document.getElementById(`${x}`)
    console.log(checkBox)
    checkBox.addEventListener("click",function(){
        if (checkBox.checked){
            checkBox.removeChild
        }else{
            console.log(`its not${x}`)
        }
    })
    
}
button.addEventListener("click", function () {
    let inputValue = NewItem.value.trim(); 
    if (inputValue !== "") {
        data.push(inputValue);
        localStorage.setItem('data', JSON.stringify(data));
        renderList();
    }

    NewItem.value = "";
});
clearItems.addEventListener("click", function () {
    localStorage.clear();
    data = [];
    renderList();
});