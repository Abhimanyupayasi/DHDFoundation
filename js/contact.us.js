const navigationButtons = document.querySelectorAll('.call-about');

// Add a click event listener to all elements with the class name 'navigationButton'
navigationButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Redirect to index.html when any button is clicked
        const phoneNumber = '+919691842445';
        window.location.href = 'tel:' + phoneNumber;
    });
});


const mailElements = document.querySelectorAll('.mail-about');

// Email address to send messages
const emailAddress = 'dhdfoundationkatni@gmail.com';

// Add click event listener to each element
mailElements.forEach(element => {
    element.addEventListener('click', () => {
        // Generate the mailto link with the specified email address and message
        const subject = 'Message from Website';
        const body = 'Hello, I am contacting you from your website!';
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open default email client with pre-filled message
        window.location.href = mailtoLink;
    });
});

document.querySelectorAll('.whatsapp-about').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link

        var phoneNumber = '+919691842445'; // Replace with your WhatsApp number
        var message = encodeURIComponent('Hi, I am from DHD Website.');

        // Create a WhatsApp link with the provided phone number and message
        var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + message;

        // Open the WhatsApp link in a new tab
        window.open(whatsappLink, '_blank');
    });
});

