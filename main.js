// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
    toggleBackToTop(); // Toggle back to top button on scroll
    updateScrollIndicator(); // Update scroll progress indicator
});

// Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").fadeIn(1000); // Added fade effect
        } else {
            $(".post-box")
                .not("." + value)
                .fadeOut(1000); // Added fade effect
            $(".post-box")
                .filter("." + value)
                .fadeIn(1000); // Added fade effect
        }
    });

    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button
let backToTopBtn = document.getElementById("backToTop");

function toggleBackToTop() {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Scroll Indicator
let scrollIndicator = document.getElementById("scrollIndicator");

function updateScrollIndicator() {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    scrollIndicator.style.width = scrolled + "%";
}

document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(function (el) {
        el.style.display = 'none';
    });

    document.querySelectorAll('input').forEach(function (el) {
        el.classList.remove('error');
    });

    // Validate Name
    let name = document.getElementById('name');
    if (name.value.trim() === '') {
        isValid = false;
        let nameError = document.getElementById('nameError');
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        name.classList.add('error');
    }

    // Validate Email
    let email = document.getElementById('email');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        isValid = false;
        let emailError = document.getElementById('emailError');
        emailError.textContent = 'Please enter a valid email';
        emailError.style.display = 'block';
        email.classList.add('error');
    }

    // Validate Password
    let password = document.getElementById('password');
    if (password.value.length < 6) {
        isValid = false;
        let passwordError = document.getElementById('passwordError');
        passwordError.textContent = 'Password must be at least 6 characters long';
        passwordError.style.display = 'block';
        password.classList.add('error');
    }

    // Submit the form if valid
    if (isValid) {
        alert('Form submitted successfully!');
        // You can proceed to submit the form data
    }
});


