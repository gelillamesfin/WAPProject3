let button = document
  .getElementById("button")
  .addEventListener("click", handleregisterclick);
function handleregisterclick() {
  let emailInput = document.getElementById("emailInput").value;
  let passwordInput = document.getElementById("passwordInput").value;
  if ((emailInput = "")) {
    alert("email required");
  } else if ((passwordInput = "")) {
    alert("password required");
  } else {
    alert("registred!!");
  }
}
