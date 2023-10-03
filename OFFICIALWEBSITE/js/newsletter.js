let form = document.querySelector("form");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycbxVBrTPvqp3-4LCophwa4uL8KwXylqpLXaDn-Od0NZVvr_dJVG2MyIfJzv2BeawaS5u8g/exec', {
    method: "POST",
    body: data
  }).then(res => res.text()).then(data => {
    console.log(data);

  });
})