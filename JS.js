/* scrol navbar */
var nav = document.querySelector('.secon-navbar');
window.addEventListener('scroll', () => {
  if (scrollY >= 20) {
    nav.classList.add('nav-scroll');
  } else if (screenY < 56) {
    nav.classList.remove('nav-scroll');
  }
});

/* product */

import product from './dataTYpe.json' assert{type: 'json'}
let alldata = []
alldata = product
let table = document.querySelector(".R-table")
console.log(table)
var divs = ''
var url
var x

/* cart */

document.getElementById("table").onload = function () {
  url = window.location.href
  url = url.split("?")
  x = url[1]
  divs = `<thead>
  <tr>
    <th scope="col">product</th>
    <th scope="col">price</th>
    <th scope="col">subtotal</th>
  </tr>
</thead>
<tbody >
<tr >
<th scope="row"><img src="${alldata[x].image}" class="w-25 h-25"></th>
<td>EGP${alldata[x].price}</td>
<td>EGP${alldata[x].price}</td>
</tr>
</tbody>`
  table.innerHTML = divs
}


/* sign up */

function regFulName() {
  var fullName = document.getElementById("userid").value
  var regFulName = /^[a-z A-Z]{3,}\s[a-z A-Z]{3,}$/i
  var res = regFulName.test(fullName)
  if (res == false) {
    document.getElementById("msg").style.visibility = "visible"
  }
  else {
    document.getElementById("msg").style.visibility = "hidden"
  }
}

function password() {
  if (document.getElementById("userpassword").value == document.getElementById("repatedPasword").value) {
    document.getElementById("msg2").style.visibility = "hidden"
  }
  else {
    document.getElementById("msg2").style.visibility = "visible"
  }
}

function ValidateEmail() {
  var emailAddress = document.getElementById("emailaddress").value
  var emailAddress = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
  var res = emailAddress.test(emailAddress)
  if (res == false) {
    document.getElementById("msg3").style.visibility = "visible"
  }
  else {
    document.getElementById("msg3").style.visibility = "hidden"
  }
}
