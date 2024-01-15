document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("donationPopup").style.display = "block";
  }, 1000); // Show popup after 1 seconds (adjust as needed)
});

function closePopup() {
  document.getElementById("donationPopup").style.display = "none";
}




