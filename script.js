
/* ========================================
   GS STEEL FURNITURE
   Main JavaScript File
======================================== */

// WHATSAPP BUSINESS NUMBER

const whatsappNumber = "919814603300";


// MOBILE NAVIGATION

const menuButton = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuButton.textContent = isOpen ? "×" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";

    });

});


// AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// WHATSAPP ENQUIRY FORM

const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", (event) => {

    event.preventDefault();

    // Get form values

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const interest = document.getElementById("interest").value;

    const message = document.getElementById("message").value.trim();


    // Create WhatsApp message

    const whatsappMessage = `
Hello GS Steel Furniture!

I would like to enquire about your furniture.

Name: ${name}

Phone: ${phone}

Interested In: ${interest}

Message: ${message || "Please contact me with more details."}
    `;


    // Encode message for WhatsApp

    const encodedMessage = encodeURIComponent(whatsappMessage);


    // Create WhatsApp URL

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


    // Display confirmation

    document.getElementById("formMessage").style.display = "block";


    // Open WhatsApp

    window.location.href = whatsappURL;
});
