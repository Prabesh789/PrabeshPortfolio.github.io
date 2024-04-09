document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sendMessage").addEventListener("click", function() {
        var form = document.getElementById("contactForm");
        var formData = new FormData(form);

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "send_email.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Success
                    console.log(xhr.responseText);
                    alert("Message sent successfully!");
                    // Optionally, you can reset the form after successful submission
                    form.reset();
                } else {
                    // Error
                    console.error(xhr.statusText);
                    alert("Failed to send message. Please try again later.");
                }
            }
        };
        xhr.send(formData);
    });
});