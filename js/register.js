let button = document
  .getElementById("button")
  .addEventListener("click", handleregisterclick);
function handleregisterclick() {
  let emailInput = document.getElementById("emailInput").value;
  let passwordInput = document.getElementById("passwordInput").value;
  if (emailInput == "") {
    alert("email required");
  } else if (passwordInput == "") {
    alert("password required");
  } else {
    let newUser = { emailInput: emailInput, passwordInput: passwordInput };
    let user = JSON.parse(localStorage.getItem("userinfo"));
    if (user == null) user = [];
    user.push(newUser);
    localStorage.setItem("userinfo", JSON.stringify(user));
    window.location.href = "./registerdsuccssfully.html";
  }
}
