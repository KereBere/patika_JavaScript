let email = 'hakanyalcinkaya@gmail.com';
let firstName = 'hakan';
let lastName = 'YALCINKAYA';

let DOMAIN = email.slice(email.search('@') + 1);
DOMAIN =  DOMAIN.slice(0, DOMAIN.indexOf('.'));
console.log(DOMAIN);
email = email.replace('gmail.com', 'kodluyoruz.org');
console.log(email)
console.log(email.includes('@'));
console.log(email.endsWith('kodluyoruz.org'));
console.log(`${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`);


let url = "www.kodluyoruz.org";
let language = "Java";

url = url.slice(url.indexOf('.') + 1);
language = language.replace('Java', 'JavaScript');

console.log(`${url} ve ${language}`)

// Prints document's attributes
// console.log(document.body) 
// console.log(document.URL) 
// console.log(document.baseURI) 
// console.log(document.location) 

// Make it darkmode
document.body.style.backgroundColor = "black";
document.body.style.color = "white";

//This is bad practice
// let h2 = document.getElementsByTagName('h2');
// console.log(h2.title.innerHTML)

//This is not best practice.
let title = document.getElementById('title');
title.innerHTML = 'Değişen bilgi';
console.log(`Selected with ID: ${title.innerText}`);

//Querry selector only seletcs one element
let link = document.querySelector('ul#list>li>a');
link.style.textDecoration = 'none';
link.innerHTML = 'Bu yeni link innerHTML"idir.';
link.style.color = 'pink';
link.style.fontSize = '25px';
link.classList.add('btn')

//Select element by id with querrySelector
let linkwithID = document.querySelector('#kodluyoruzLink');
linkwithID.innerHTML = 'Id ile ulaşılan a tagı';
console.log(link.innerHTML)
linkwithID.style.color = ('red'); // This way is also valid.

//Get data and display it on the screen
//let fullName = prompt('Lütfen adınızı giriniz.', '');
let fullName = 'Promp ile alınan data - Benim adım name';
let greeting = document.querySelector('#greeting');

greeting.innerHTML = `${greeting.innerHTML} <small style = "color: red"> ${fullName}</small>`;


let firstChild = document.querySelector("ul#list-2>li:first-child").innerHTML = 'Harkonnen"s and giedi prime wiped by Paul Atreides';
console.log(firstChild);

let lastChild = document.querySelector("ul#list-2>li:last-child").innerHTML = 'House Atreides will live forever';
console.log(lastChild);

const ulDOM = document.querySelector("ul#list-2");
let liDOM = document.createElement('li');
liDOM.innerHTML = 'Kendi oluşturduğumuz öğe-sona eklemek';

let liDOM_2 = document.createElement('li');
liDOM_2.innerHTML = 'Kendi oluşturduğumuz öğe-başa eklemek';

ulDOM.append(liDOM); // Sona ekle
ulDOM.prepend(liDOM_2);


//Dom elementlerine CSS style atamak.
let cssDOM = document.querySelector('#cssDOM');
cssDOM.classList.add("text-primary");
cssDOM.classList.add("title");
cssDOM.classList.add("new-info", "second-class", "third-class"); 

const buton = document.querySelector('#css-remove-button');
buton.addEventListener('click', ()=> cssDOM.classList.toggle('text-primary'));
//cssDOM.classList.remove("text", "second-class", "third-class"); -> Class silmek

console.log(cssDOM);
console.log(!!2); // -> True  == value check, === value & type check 

let price = "100"
let user = "hakan"

price = 0;
console.log(price > 0 && user != "guest");
console.log(price > 0 || user != "guest");