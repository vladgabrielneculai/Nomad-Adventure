document.addEventListener("DOMContentLoaded", function () {
  const checkAll = document.getElementById("all_terms");
  const checkItems = document.querySelectorAll(".check-item");

  checkAll.addEventListener("change", function () {
    const isChecked = checkAll.checked;
    checkItems.forEach(item => {
      item.checked = isChecked;
    });
  });
});

// Obțineți referințele la elementele formularului
const qualityInput = document.querySelector('input[name="Calitate"]');
const numKidsInput = document.getElementById('number_kids');
const numTeachersInput = document.getElementById('number_teachers');

// Adăugați un ascultător de eveniment pentru când se schimbă calitatea
qualityInput.addEventListener('change', function () {
  const selectedQuality = qualityInput.value;

  // Dacă calitatea este "Părinte"
  if (selectedQuality === 'Părinte') {
    // Setăm restricții pentru numărul de copii
    numKidsInput.min = 1;
    numKidsInput.max = 5;

    // Dezactivăm introducerea numărului de cadre didactice
    numTeachersInput.disabled = true;
  } else {
    // Dacă calitatea este "Profesor" sau altceva
    // Resetăm restricțiile pentru numărul de copii
    numKidsInput.min = 1;
    numKidsInput.max = 150;

    // Permitem introducerea numărului de cadre didactice
    numTeachersInput.disabled = false;
  }
});

var form = document.querySelector("form");
var allterms = document.getElementById("all_terms");
var rules = document.getElementById("rules");
var promomsg = document.getElementById("messages");
var promomail = document.getElementById("emails");
var newsletter = document.getElementById("newsletter");

var submit = document.getElementById("submit");

function resetForm() {
  form.reset();
}

form.addEventListener(submit, e => {
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

  const action = e.target.action;

  fetch(action, {
    method: "POST",
    body: formData,
  })
  then(() => {
    alert("Success!");
    resetForm();
  });
});


