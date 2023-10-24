document.getElementById("button").addEventListener("click", handleloginclick);
function handleloginclick() {
  let emailInput = document.getElementById("emailInput").value;
  let passwordInput = document.getElementById("passwordInput").value;

  if (emailInput == "") {
    alert("Email is required");
  } else if (passwordInput == "") {
    alert("Password is required");
  } else {
    let users = JSON.parse(localStorage.getItem("userinfo"));
    function filterByUsername(user) {
      if (user.emailInput == emailInput && user.passwordInput == passwordInput)
        return true;
      else return false;
    }

    let result = users.filter(filterByUsername);

    if (result.length == 0) alert("Incorrect password/username");
    else {
      window.location.href = "./index.html";
    }
  }
}
