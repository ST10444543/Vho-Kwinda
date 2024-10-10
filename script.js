// Simple validation for contact form
document.getElementById("submit-btn").addEventListener("click", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});
