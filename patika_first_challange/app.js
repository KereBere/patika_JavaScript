let firstName = prompt('Adınızı giriniz.', "");
const header = document.querySelector('#header'); 

let greeting = document.createElement('h3');

greeting.innerHTML = `Merhaba ${firstName}! Hoş Geldin!`;

header.appendChild(greeting);
 



//let timeDisplay = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

function tarihSaat() {
    let date = new Date().toLocaleString();
    document.querySelector("#time").innerHTML = date;
}

setInterval(tarihSaat, 1000); 

const d = new Date();

const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
document.querySelector('#day').innerHTML = days[d.getDay()];


 

//setInterval setinterval is a built-in Js method check out later.