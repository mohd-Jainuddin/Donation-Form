document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("donationPopup").style.display = "block";
  }, 2000); // Show popup after 2 seconds (adjust as needed)
});

function closePopup() {
  document.getElementById("donationPopup").style.display = "none";
}

document.getElementById("btn").addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let amount = document.getElementById("amount").value;

  if ((name != "" && email != "", number != "", amount != "")) {
    alert(`Thank You ${name}`);
  }
});
