var form = document.getElementById("myForm");
form.addEventListener("submit",e =>{
e.preventDefault();
fetch(form.action, {
  method: "POST",
  body: new FormData(document.getElementById("myForm")),
}).then(
  response => response.json(),
).then((html) => {
  window.open('contact.html','_blank');
});
});