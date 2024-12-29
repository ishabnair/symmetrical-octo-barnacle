document.getElementById('checkoutForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert(`Thank you for your order, ${name}! A confirmation email will be sent to ${email}.`);
        // Additional logic to handle order placement can go here.
    } else {
        alert('Please fill out all required fields.');
    }
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
        // Reset form
        this.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
