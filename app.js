document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("donationPopup").style.display = "block";
  }, 1000); // Show popup after 1 seconds (adjust as needed)
});

function closePopup() {
  document.getElementById("donationPopup").style.display = "none";
}

let button = document.getElementById("btn");

button.addEventListener("click",()=>{
  let name = document.getElementById("name").value;
  alert(`Thank You ${name}`)
})


