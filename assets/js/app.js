// Get the elements for the mobile menu and buttons
const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');
const mobileNav = document.getElementById('mobile-ul');

// Add event listener to open the menu
menuIcon.addEventListener('click', () => {
    mobileNav.classList.add('visible');  // Show the mobile menu
    menuIcon.style.display = 'none';     // Hide the menu icon
    closeIcon.style.display = 'block';   // Show the close icon
});

// Add event listener to close the menu
closeIcon.addEventListener('click', () => {
    mobileNav.classList.remove('visible'); // Hide the mobile menu
    menuIcon.style.display = 'block';      // Show the menu icon
    closeIcon.style.display = 'none';      // Hide the close icon
});
