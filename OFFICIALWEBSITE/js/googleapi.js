var form = document.getElementById("myForm");
var allterms = document.getElementById("all_terms");
var rules = document.getElementById("rules");
var promomsg = document.getElementById("messages");
var promomail = document.getElementById("emails");
var newsletter = document.getElementById("newsletter");
var confirmationMessage = document.getElementById("confirmationMessage");

form.addEventListener("submit", function (e) {
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
    .then(function (response) {
      if (response.ok) {
        return response.json(); // Parse the response data
      } else {
        throw new Error('API request failed');
      }
    })
    .then(function (data) {
      if (data.created === 1) {
        // Clear form inputs
        form.reset();

        // Show confirmation message
        confirmationMessage.style.display = "block";
      } else {
        throw new Error('API request did not create data');
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
});
