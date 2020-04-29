/* 
 The code below warns the users if they forget to fill in the informaton
*/
function init() {
  var button = document.getElementById('submit');
  
  function Alert() {
    var type = document.forms["myForm2"]["type_field"].value;
    var cnumber = document.forms["myForm2"]["cnumber_field"].value;
    var cname = document.forms["myForm2"]["cname_field"].value;
    var mmyy = document.forms["myForm2"]["mmyy_field"].value;
    var cvv = document.forms["myForm2"]["cvv_field"].value;
    var address1 = document.forms["myForm3"]["address1_field"].value;
    var city = document.forms["myForm3"]["city_field"].value;
    var state = document.forms["myForm3"]["state_field"].value;
    var country = document.forms["myForm3"]["country_field"].value;
    var zip = document.forms["myForm3"]["zip_field"].value;
    var phone = document.forms["myForm3"]["phone_field"].value;
    
    if (cnumber == "")
    {
      alert("Please Enter Your Credit Card Number");
      return false;
    }
    
    if (cname == "")
    {
      alert("Please Enter Your Name On The Credit Card");
      return false;
    }
  
    if (mmyy == "")
    {
      alert("Please Enter Your Expired Date");
      return false;
    }
  
    if (cvv == "")
    {
      alert("Please Enter Your CVV");
      return false;
    }
  
    if (address1 == "")
    {
      alert("Please Enter Your Billing Address");
      return false;
    }
  
    if (city == "")
    {
      alert("Please Enter Your Billing City");
      return false;
    }
  
    if (state == "")
    {
      alert("Please Enter Your Billing State");
      return false;
    }
  
    if (country == "")
    {
      alert("Please Enter Your Billing City");
      return false;
    }
  
    if (zip == "")
    {
      alert("Please Enter Your Billing ZIP/Postal Code");
      return false;
    }
  
    if (phone == "")
    {
      alert("Please Enter Your Billing Phone Number");
      return false;
    }
  }
  button.addEventListener('click', Alert);
}
window.addEventListener('load', init);

/*
Slideshow for index.html
*/
function init1() {
 var slideIndex = 1;
 showImage(slideIndex);
 
 function plusImage(n) {
  showImage(slideIndex += n);
 }
 
 function showImage(n) {
  var i;
  var x = document.getElementsByClassName("slide_image");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
   x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
 }
}
window.addEventListener('load', init1);

/*
The code below displays collapsible content panels for presenting information in a limited amount of space.
*/
function init2() {
 var cur = null;
 var acc = document.getElementsByClassName("accordion");
 var i;
 
 for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
   // Only close already open panel
   if (cur == this) {
    toggleItem(cur);
    cur = null;
    return;
   }
   // Close current panel, and open this panel
   if (cur) {
    toggleItem(cur);
   }
   toggleItem(this);
   cur = this;
  }
 }
 
 function toggleItem(item) {
  item.classList.toggle("active");
  var panel = item.nextElementSibling;
  if (panel.style.maxHeight) {
   panel.style.maxHeight = null;
  } else {
   panel.style.maxHeight = panel.scrollHeight + "px";
  }
 }
}
window.addEventListener('load', init2);