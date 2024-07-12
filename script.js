document.getElementById('toggle_theme').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    var root = document.documentElement;

    // Toggle the background colors
    if (root.style.getPropertyValue('--custom-bg-color') === '#1e1e1e') {
        root.style.setProperty('--custom-bg-color', '#ffffff');
        root.style.setProperty('--custom-Container_bg-color', '#f0f0f0');
        document.querySelectorAll('.navbar a, .about-content, .skills-section, .portfolio-section, .experience-section, .testimonial-section, .contact-section').forEach(el => el.style.color = '#000000');
    } else {
        root.style.setProperty('--custom-bg-color', '#1e1e1e');
        root.style.setProperty('--custom-Container_bg-color', '#333333');
        document.querySelectorAll('.navbar a, .about-content, .skills-section, .portfolio-section, .experience-section, .testimonial-section, .contact-section').forEach(el => el.style.color = '#ffffff');
    }
});

//menu setup

// function toggleMenu() {
//     const menuContent = document.getElementById('menuContent');
//     if (menuContent.style.display === "block") {
//         menuContent.style.display = "none";
//     } else {
//         menuContent.style.display = "block";
//     }
// }

// window.onclick = function(event) {
//     const menuButton = document.querySelector('.menu-button');
//     const menuContent = document.getElementById('menuContent');

//     if (!menuButton.contains(event.target)) {
//         if (menuContent.style.display === "block") {
//             menuContent.style.display = "none";
//         }
//     }
// }

// ***************Animation of heading*********
//     <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
// <script>
// var typed = new Typed(".auto-type", {
// strings: ["Tayyab", "Web Developer"],
// typeSpeed: 156,
// backSpeed: 154,
// loop: true
// })
// </script>
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var whatsappNumber = '923190845753';
    var whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
});