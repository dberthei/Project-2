/*
Nam please add what your code does here.
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
The code below displays collapsible content panels for presenting information in a limited amount of space.
*/
function init() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}
window.addEventListener('load', init);

