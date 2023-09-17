// JavaScript to show and hide the signup form popup

document.addEventListener("DOMContentLoaded", function () {
    const signupPopup = document.getElementById("signupPopup");
    const closePopup = document.getElementById("closePopup");
    const showSignup = document.getElementById("showSignup");

    showSignup.addEventListener("click", function (event) {
        event.preventDefault();
        signupPopup.style.display = "block";
    });

    closePopup.addEventListener("click", function () {
        signupPopup.style.display = "none";
    });
});

function registerUser() {
    // Get user input from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create a JavaScript object with user data
    const userData = {
        name: name,
        email: email,
        password: password
    };

    // Send the data to the server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "signup.php", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Display the result message from the server
            document.getElementById("resultMessage").textContent = xhr.responseText;
        } else {
            console.error("Error: " + xhr.statusText);
        }
    };

    xhr.onerror = function () {
        console.error("Network error");
    };

    // Send the user data as JSON to the server
    xhr.send(JSON.stringify(userData));
}
