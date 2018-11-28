function(){
  var investObj = document.getElementById("invest");
  var name = investObj.name.value;
  var email = investObj.email.value;

  if (!validateName(name))
  {
      alert("Error: Invalid Name.");
      everythingOK = false;
  }

  if (!validateEmail(email))
  {
      alert("Error: Invalid E-Mail.");
      everythingOK = false;
  }

  if (everythingOK)
  {
      alert("All the information looks good.\nThank you!");
      return true;
  }


}

function validateName(name)
{
    var p = name.search(/^[-'\w\s]+$/);
    if (p == 0)
        return true;
    else
        return false;
}
function validateEmail(address)
{
    var p = address.search(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})$/);
    if (p == 0)
        return true;
    else
        return false;
}
