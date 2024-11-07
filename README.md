# Portfolio Web App

This portfolio web app is a personal project to showcase my professional achievements, technical skills, and educational background in a responsive and organized format, optimized for both desktop and mobile viewing.

## Features

- **Interactive Forms**  
  - Built using Google Apps Script and Google Sheets to handle and store data inputs from visitors efficiently.

- **Project Demos**  
  - Includes images and videos of my working prototype projects, with downloadable options for easy access.

- **Awards & Recognition**  
  - Highlights my accomplishments and recognitions received in my current organization.

- **Educational Background & Certifications**  
  - Contains downloadable documents of my qualifications for convenient verification by recruiters.

- **Best Practices & Professional Summary**  
  - Includes reflections on my career journey, skills, and experiences from my first role in an MNC.

## Technologies Used

- **HTML5** and **CSS3**  
  - Used for structuring and styling content, ensuring that the layout is clean, responsive, and works well on all devices.

- **JavaScript (ES6)**  
  - Implements dynamic and interactive features within the portfolio, such as form validation, interactive elements, and responsive content updates.

- **Native JavaScript**  
  - Handles interactive features such as form validation, real-time feedback, and other client-side logic without the need for external libraries.
  
  Example of form validation in JavaScript:
  
  ```javascript
  document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();
      
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let message = document.getElementById("message").value;
      
      if (name && email && message) {
          alert("Thank you for your message, " + name + "!");
      } else {
          alert("Please fill out all fields.");
      }
  });
