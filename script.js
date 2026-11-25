
/* ========================================
   GS STEEL FURNITURE
   Main JavaScript File
======================================== */


// WHATSAPP BUSINESS NUMBER

const whatsappNumber = "919814603300";


// ========================================
// MOBILE NAVIGATION
// ========================================

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {

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

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.textContent = "☰";

        });

    });

}


// ========================================
// AUTOMATIC COPYRIGHT YEAR
// ========================================

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


// ========================================
// WHATSAPP ENQUIRY FORM
// ========================================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", (event) => {

        event.preventDefault();


        // GET FORM VALUES

        const nameElement = document.getElementById("name");
        const phoneElement = document.getElementById("phone");
        const interestElement = document.getElementById("interest");
        const messageElement = document.getElementById("message");

        const name = nameElement ? nameElement.value.trim() : "";

        const phone = phoneElement ? phoneElement.value.trim() : "";

        const interest = interestElement ? interestElement.value : "";

        const message = messageElement ? messageElement.value.trim() : "";


        // CREATE WHATSAPP MESSAGE

        const whatsappMessage = `
Hello GS Steel Furniture!

I would like to enquire about your furniture.

Name: ${name}

Phone: ${phone}

Interested In: ${interest}

Message: ${message || "Please contact me with more details."}
        `;


        // ENCODE MESSAGE

        const encodedMessage = encodeURIComponent(whatsappMessage);


        // CREATE WHATSAPP URL

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


        // DISPLAY CONFIRMATION

        const formMessage = document.getElementById("formMessage");

        if (formMessage) {

            formMessage.style.display = "block";

        }


        // OPEN WHATSAPP

        window.location.href = whatsappURL;

    });

}


// ========================================
// END OF MAIN JAVASCRIPT
// ========================================

