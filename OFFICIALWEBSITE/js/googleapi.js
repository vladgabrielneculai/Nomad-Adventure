var form = document.getElementById("myForm");
var allterms = document.getElementById("all_terms");
var rules = document.getElementById("rules");
var promomsg = document.getElementById("messages");
var promomail = document.getElementById("emails");
var newsletter = document.getElementById("newsletter");

form.addEventListener("submit",e =>{
e.preventDefault();

  var alltermsValue = allterms.checked ? "da" : "nu";
  var rulesValue = rules.checked ? "da" : "nu";
  var promomsgValue = promomsg.checked ? "da" : "nu";
  var promomailValue = promomail.checked ? "da" : "nu";
  var newsletterValue = newsletter.checked ? "da" : "nu";

  var formData = new FormData(form);

  formData.set("data[Accept termenii]", alltermsValue);
  formData.set("data[Regulament]", rulesValue);
  formData.set("data[Mesaje promo]", promomsgValue);
  formData.set("data[Email promo]", promomailValue);
  formData.set("data[Newsletter]", newsletterValue);

  fetch(form.action, {
    method: "POST",
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    if (data.result === "success") {
      // Handle the success response as needed
      alert("Success!");

      // Extract the row information if necessary
      var row = data.row;

      // Set a timer to redirect after 2 seconds (adjust as needed)
      setTimeout(function () {
        window.location.href = "contact.html"; // Replace with your page URL
      }, 2000); // 2000 milliseconds (2 seconds) delay before redirecting
    } else {
      // Handle the case where the form submission was not successful
      alert("Form submission failed.");
    }
  });
});

function resetForm() {
  form.reset();
}
