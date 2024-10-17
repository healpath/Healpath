// Toggle the mobile menu when the hamburger is clicked
document.getElementById("hamburger").addEventListener("click", function(event) {
    var mobileMenu = document.getElementById("mobileMenu");
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block";
    }
    event.stopPropagation(); // Prevent the event from bubbling up
});


// Close the mobile menu if clicking outside of it
window.addEventListener("click", function(event) {
    var mobileMenu = document.getElementById("mobileMenu");
    var hamburger = document.getElementById("hamburger");

    // Check if the clicked area is outside the mobile menu and the hamburger button
    if (mobileMenu.style.display === "block" && !mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
        mobileMenu.style.display = "none";
    }
});




