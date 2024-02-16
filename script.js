
//sepehr-sorayapour//
//ورژن جاوا خودم//


let filterElem ,inpElemadd, clrBtnElem, ulElem, storageItems, BtnElem,
function init(){


    inpElem = document.getElementById("item-input");


    filterElem = document.getElementById("filter");


    addBtnElem = document.querySelector(".btn");

    clrBtnElem = document.querySelector(".btn-clear");

    loadFromStorage()


    addBtnElem.addEventListener("click",addItem);

    ulElem.addEventListener("click",removeItem);

    clrBtnElem.addEventListener("click",clearList);

}
function addItem(evt) {

    evt.preventDefault()

    if (inpElem.value !== "") {

        let newItem = inpElem.value;

        inpElem.value = "";

        if (!isRepeated(newItem)) {

            createItem(newItem);

            addToStorage(newItem);}

        else{ alert("item exists")
        }
      

    }
}
function isRepeated(newItem){

    const items = document.querySelectorAll("li");

    let listItems = []

    items.forEach((item)=>{

        listItems.push(item.textContent.toLowerCase())})

    console.log (listItems.indexOf(newItem.toLowerCase()))

    return listItems.indexOf(newItem.toLowerCase()) !== -1;
}
function createItem(newItem) {

    let newList = document.createElement("li");

    let newButton = document.createElement("button");

    let newText =  document.createTextNode(newItem);

    let newIcon = document.createElement("i");

    ulElem.appendChild(newList);

    newList.appendChild(newText);

    newList.appendChild(newButton);

    newButton.appendChild(newIcon);

    newButton.className="remove-item btn-link text-red";

    

}
function removeItem(evt){

    if (evt.target.className.includes("fa-xmark")){

        removeFromStorage((evt.target.parentElement.parentElement.textContent))

        evt.target.parentElement.parentElement.remove();

        checkUi();
    }
}
function removeFromStorage(item) {

    let index = storageItems.indexOf(item)

    if (index !== -1) {

        storageItems.splice(index, 1);

        localStorage.setItem("key",JSON.stringify(storageItems));
    }
}
function clearList(evt){

    while (ulElem.firstElementChild){

        ulElem.firstElementChild.remove();
    }
    storageItems = []

    localStorage.setItem("key",JSON.stringify(storageItems));

    checkUi()
}
function  checkUi(){

    if (!ulElem.firstElementChild){

        clrBtnElem.style.display = "none";

        filterElem.style.display = "none";
    }
    else{
        clrBtnElem.style.display = "block";

        filterElem.style.display = "block";
    }

}
function filterItems(evt){

    const searchValue = filterElem.value.toLowerCase();

    const items = document.querySelectorAll("li");

    items.forEach((item)={

        if (item.textContent.toLowerCase().indexOf(searchValue) === -1) {

            item.style.display = "none";
        }
        else{
           
    })

}

function getFromStorage() {

    let listFromStorage = [];

    if (!localStorage.getItem('key')) {

        listFromStorage = [];

    } else {

        listFromStorage = JSON.parse(localStorage.getItem("key"));
    }

    return listFromStorage;
}
function addToStorage(item){

    storageItems.push(item);

    localStorage.setItem("key",JSON.stringify(storageItems));


}
function loadFromStorage(){

    storageItems = getFromStorage();

    storageItems.forEach((item)=>{

        createItem(item)

    })
}
init();

