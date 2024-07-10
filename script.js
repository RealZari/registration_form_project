// ACIP Internship Task 1
// Author: Zaryab Hussain
// JavaScript File

var onclick = false;
var isVisible = true;

function submitForm() {
  var form = document.getElementById("registrationForm");
  var formData = new FormData(form);
  var output = document.getElementById("formData");
  var input = document.querySelectorAll(".input");
  var container = document.getElementById("container");

  input.forEach((item) => {
    console.log(item.value);
    item.value = "";
  });
  // Clear previous output
  output.innerHTML = "";

  // Check for empty fields
  let hasEmptyField = false;
  formData.forEach((value) => {
    if (value == "") {
      hasEmptyField = true;
    }
  });

  // If there's any empty field, return early
  if (hasEmptyField) {
    alert("Please fill in all fields.");
    return;
  }
  window.scrollTo(0, 0);
  // Toggle onclick state
  onclick = !onclick;
  if (!onclick) {
    container.style.display = "none";
  }

  // Display the form data
  output.style.display = "block";
  output.innerHTML = "<h3>Form Data</h3>";
  formData.forEach(function (value, key) {
    output.innerHTML += "<p><strong>" + key + ":</strong> " + value + "</p>";
  });

  const para = document.createElement("div");
  para.innerHTML = "&#10540;";
  para.classList.add("cross");
  para.id = "cross";

  // Prepend the newly created element to the output div
  output.prepend(para);

  var cross = document.getElementById("cross");

  cross.addEventListener("click", (e) => {
    console.log("clicked");
    isVisible = !isVisible;

    if (isVisible) {
      output.style.display = "block";
    } else {
      output.style.display = "none";
      container.style.display = "block";
      formData.forEach((item) => {
        item = "";
      });
    }
  });
}
