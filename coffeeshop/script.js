document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", (event) => {
            // 1. Get all the form input elements
            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");

            // 2. Get the empty error tags under the fields
            const nameError = document.getElementById("name-error");
            const emailError = document.getElementById("email-error");
            const messageError = document.getElementById("message-error");

            // 3. Reset everything from the last click (clear old errors)
            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";

            // 4. Clean the text values (remove extra spaces)
            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();
            const messageValue = messageInput.value.trim();

            // Email check pattern (must have letters, @, letters, ., letters)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let isValid = true;

            // --- VALIDATE NAME ---
            if (!nameValue) {
                nameError.textContent = "Name is required.";
                isValid = false;
            } else if (nameValue.length > 30) {
                nameError.textContent = "Name cannot exceed 30 characters.";
                isValid = false;
            }

            // --- VALIDATE EMAIL ---
            if (!emailValue) {
                emailError.textContent = "Email is required.";
                isValid = false;
            } else if (!emailRegex.test(emailValue)) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            // --- VALIDATE MESSAGE ---
            if (!messageValue) {
                messageError.textContent = "Message is required.";
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
                return;
            }

            alert("Thank you! Your message has been submitted successfully.");
        });
    }
});
