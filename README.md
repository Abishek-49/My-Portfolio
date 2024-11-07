# Portfolio Web App

## Portfolio URL
- Check out my portfolio live on: [abishek-narayan-v-portfolio.netlify.app](https://abishek-narayan-v-portfolio.netlify.app)
This portfolio web app is a personal project to showcase my professional achievements, technical skills, and educational background in a responsive and organized format, optimized for both desktop and mobile viewing.

## Features

### Interactive Forms
- Built using Google Apps Script and Google Sheets to handle and store data inputs from visitors efficiently.

### Project Demos
- Includes images and videos of my working prototype projects, with downloadable options for easy access.

### Awards & Recognition
- Highlights my accomplishments and recognitions received in my current organization.

### Educational Background & Certifications
- Contains downloadable documents of my qualifications for convenient verification by recruiters.

### Best Practices & Professional Summary
- Includes reflections on my career journey, skills, and experiences from my first role in an MNC.

## Technologies Used

### HTML5 and CSS3
- Structured content with HTML5 and styled using CSS3, ensuring a clean, responsive design across devices.

### JavaScript (ES6)
- Implements dynamic and interactive features within the portfolio, such as form validation, interactive elements, and responsive content updates.

### Responsive Web Design (RWD) with Flexbox
- Utilizes Flexbox to create a fluid layout that adapts to different screen sizes and orientations, ensuring the portfolio is mobile-friendly and looks great on desktops, tablets, and phones.

### Video Streaming
- Embedded video demos showcase my working prototype projects, giving recruiters and visitors a clear understanding of the applications and functionalities I've worked on. Videos are streamed using standard HTML5 `<video>` tags.

## Code Examples

### Form Validation in JavaScript
Example of form validation using native JavaScript to handle input requirements:
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
