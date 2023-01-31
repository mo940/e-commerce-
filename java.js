/* product */

import product from './dataTYpe.json' assert{type: 'json'}
let alldata = []
alldata = product
let show = document.querySelector('.row')
var divs = ''
var url
var x


function displayDate() {
  for (var i = 0; i < alldata.length; i++) {
    divs += `<div class="col-md-4 text-center product">
        <a href="show.html?${i}"><img src="${alldata[i].image}" class="w-75">
        <h2>${alldata[i].title}</h2>
        <p>EGP${alldata[i].price}</p>
       <a href="cart.html?${i}"><button>ADD TO CART</button></a>
        </a>
        </div>`;
  }
  show.innerHTML = divs
}

displayDate();


document.getElementById("myFrame").onload = function () {
  url = window.location.href
  url = url.split("?")
  x = url[1]
  divs = `<div class="col">
<img src="${alldata[x].image}">
</div>
<div class="col text-center">
<h3 style="color: #555555; font-size: 40px;">${alldata[x].title}</h3>
<p style="color: #111111; font-size: 25px;">EGP${alldata[x].price}</p>
<p style="color: #555555; font-size: 20px;">${alldata[x].description}</p>
<hr>
<a href="cart.html"> <button style="background-color: #dfba5b; color: #ffffff;" class="w-50" >
ADD TO CHART</button></a>
<a href="index.html"> <button style="background-color: #dfba5b; color: #ffffff;" class="w-75 mt-5" >
    CONTINUE SHOPING</button></a>
`
  show.innerHTML = divs
};

