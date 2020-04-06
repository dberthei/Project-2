function init() {
    var button = document.getElementById('submit');

    function Alert() {
        var type = document.forms["myForm"]["type_field"].value;
		var cnumber = document.forms["myForm"]["cnumber_field"].value;
		var cname = document.forms["myForm"]["cname_field"].value;
		var mmyy = document.forms["myForm"]["mmyy_field"].value;
		var cvv = document.forms["myForm"]["cvv_field"].value;
		var address1 = document.forms["myForm2"]["address1_field"].value;
		var city = document.forms["myForm2"]["city_field"].value;
		var state = document.forms["myForm2"]["state_field"].value;
		var country = document.forms["myForm2"]["country_field"].value;
		var zip = document.forms["myForm2"]["zip_field"].value;
		var phone = document.forms["myForm2"]["phone_field"].value;
		
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