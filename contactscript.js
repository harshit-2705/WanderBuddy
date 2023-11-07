document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Here you can add code to send the form data to the server or perform other actions

    // For demonstration purposes, display a response message
    var responseDiv = document.getElementById("response");
    responseDiv.innerText = `Thank you, ${name}! Your message has been received.`;
    responseDiv.style.color = "#4caf50";
    document.getElementById("contact-form").reset();
});
