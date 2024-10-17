// Get the elements for the mobile menu and buttons
const menuIcon = document.getElementById('menu');
const closeIcon = document.getElementById('close');
const mobileNav = document.getElementById('mobile-ul');
const mobileExitDiv = document.getElementById('mobile-nav-exit');

// Add event listener to open the menu
menuIcon.addEventListener('click', () => {
    mobileNav.classList.add('visible');        // Show the mobile menu
    menuIcon.style.display = 'none';           // Hide the menu icon
    closeIcon.style.display = 'block';         // Show the close icon
    mobileExitDiv.classList.add('visible');    // Hide div
});

// Add event listener to close the menu
closeIcon.addEventListener('click', () => {
    mobileNav.classList.remove('visible');       // Hide the mobile menu
    menuIcon.style.display = 'block';            // Show the menu icon
    closeIcon.style.display = 'none';            // Hide the close icon
    mobileExitDiv.classList.remove('visible');
});

mobileExitDiv.addEventListener('click', () => {
    mobileNav.classList.remove('visible');       // Hide the mobile menu
    menuIcon.style.display = 'block';            // Show the menu icon
    closeIcon.style.display = 'none';            // Hide the close icon
    mobileExitDiv.classList.remove('visible');   // Hide div
});


function formEvent(){
    event.preventDefault();
    const userForm = document.getElementById("user-contact-form");
    const formOutput = document.getElementById("form-output");
    const userName = document.getElementById("user-name").value;
    const userEmail = document.getElementById("user-email").value;
    const userMessage = document.getElementById("user-message").value;
    
    

    if(!userName || !userEmail || !userMessage){
        formOutput.classList.add('error');
        formOutput.innerHTML = "Please fill all the fields!! ";
    }
    else{
        formOutput.classList.remove('error');
        formOutput.innerHTML = "Submitted Sucessfully!! ";
        console.log(userName);
        console.log(userEmail);
        console.log(userMessage);
        userForm.reset();
    }

}