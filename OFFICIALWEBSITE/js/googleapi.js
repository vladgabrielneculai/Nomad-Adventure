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

      alert("Success!");

      var row = data.row;

      setTimeout(function () {
        window.location.href = "contact.html"; 
      }, 2000); 
    } else {
      alert("Form submission failed.");
    }
  });
});

function resetForm() {
  form.reset();
}
