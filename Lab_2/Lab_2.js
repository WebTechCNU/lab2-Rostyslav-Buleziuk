/* Creating Fruits*/

let isSubscribed = "user is subscribed";

window.onload = setTimeout( function(){
    if (!(document.cookie === isSubscribed)) {
        let modal = document.querySelector("#openModal");
        modal.style.opacity = 1;
        modal.style.pointerEvents = "auto";
    }
}, 3000);

function closeModal(){
    let modal = document.querySelector("#openModal");
    modal.style.display = "none";
}

function subscribe(){
    document.cookie = isSubscribed;
    closeModal();
}

let fruits = [
    {
        name: "banana",
        url: "https://varus.ua/img/product/300/300/127622",
        id: 1
    },
    {
        name: "lemon",
        url: "https://varus.ua/img/product/300/300/127801",
        id: 2
    },
    {
        name: "laura",
        url: "https://fruit-time.ua/images/cache/products/ea/kivano-imp-300x300.jpg",
        id: 3
    },
    {
        name: "granadilla",
        url: "https://nebanan.com.ua/wp-content/uploads/2019/11/granadilla-third-e1602669407123-300x300.jpg",
        id: 4
    },
];

function getFruits(){
    let divInfo = document.querySelector("#fruits");
    let inner = "";
    for(let i = 0; i < fruits.length ; i++){
        let img = "<img title='Friuts' src='" + fruits[i].url + "'>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}


/* Creating Vegetables*/

let vegetables = [
    {
        name: "cabbage",
        url: "https://fruit-time.ua/images/cache/products/36/kapusta__139-300x300.jpg",
        id: 1
    },
    {
        name: "pepper",
        url: "https://delikates.ua/images/product/perech.jpg",
        id: 2
    },
    {
        name: "carrot",
        url: "https://varus.ua/img/product/300/300/147011",
        id: 3
    },
    {
        name: "tomato",
        url: "https://m.dom-eda.com/uploads/images/catalog/item/c6ebcf64ba/e87b941b85_500.jpg",
        id: 4
    },
];

function getVegetables(){
    let divInfo = document.querySelector("#vegetables");
    let inner = "";
    for(let i = 0; i < vegetables.length ; i++){
        let img = "<img title='Vegetables' src='" + vegetables[i].url + "'>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}

/* Creating Sweets*/

let sweets = [
    {
        name: "Candy",
        url: "https://hayali.shop/ftp/photos/g210.jpg",
        id: 1
    },
    {
        name: "M & M's",
        url: "https://img.fozzyshop.com.ua/5268-home_default/drazhe-mms-s-shokoladom.jpg",
        id: 2
    },
    {
        name: "Skittles",
        url: "https://img.fozzyshop.com.ua/177488-home_default/drazhe-skittles-originalnye-fruktovye.jpg",
        id: 3
    },
    {
        name: "cake",
        url: "https://media.dyvys.info/2017/11/e0715c007bac84d5c262759c0ac71dc5.jpg",
        id: 4
    },
];

function getSweets(){
    let divInfo = document.querySelector("#sweets");
    let inner = "";
    for(let i = 0; i < sweets.length ; i++){
        let img = "<img title='Sweets' src='" + sweets[i].url + "'>";
        inner = inner + img;
    }
    divInfo.innerHTML = inner;
}

