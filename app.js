document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("donationPopup").style.display = "block";
  }, 1000); // Show popup after 1 seconds (adjust as needed)
});

function closePopup() {
  document.getElementById("donationPopup").style.display = "none";
}

let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let name = document.getElementById("name").value;
  let amount = document.getElementById("amount").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;

  if (name != "" && amount != "" && email != "" && number != "") {
    // Check if the input is a 10-digit number
    if (/^\d{10}$/.test(number)) {
      // Form is valid, you can submit it or perform further actions
      alert(
        "Thank you for your donation! Your generosity is making a positive impact. We appreciate your support and commitment to our cause. Together, we can make a difference!"
      );
    }
  }
});
