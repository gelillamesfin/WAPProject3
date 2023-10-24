document.getElementById("button").addEventListener("click", handleloginclick);
function handleloginclick() {
  let emailInput = document.getElementById("emailInput").value;
  let passwordInput = document.getElementById("passwordInput").value;

  if (emailInput == "") {
    alert("Email is required");
  } else if (passwordInput == "") {
    alert("Password is required");
  } else {
    alert("Logging in..");
  }
}
