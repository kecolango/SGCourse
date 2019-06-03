function validateItems() {
    clearErrors();
    var name = document.forms["contact"]["name"].value;
    var email = document.forms["contact"]["email"].value;
    var number = document.forms["contact"]["number"].value;
    if (name == "" || isNaN(name)) {
        alert("Name must be filled in.");
        document.forms["contact"]["name"]
           .parentElement.className = "form-group has-error";
        document.forms["contact"]["name"].focus();
        return false;
    }
   if (email == "" || isNaN(email)) {
       alert("Email must be filled in.");
       document.forms["contact"]["email"]
          .parentElement.className = "form-group has-error"
       document.forms["contact"]["email"].focus();
       return false;
   }
   if (number == "" || isNaN(number)) {
       alert("Number must be filled in.");
       document.forms["contact"]["number"]
          .parentElement.className = "form-group has-error"
       document.forms["contact"]["number"].focus();
       return false;
   }
   return true;
}