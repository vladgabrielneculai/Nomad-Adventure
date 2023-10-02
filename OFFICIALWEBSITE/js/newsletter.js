var form = document.getElementById("newsletter");

form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    var formData = new FormData(form);
  
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