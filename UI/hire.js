// function handleClick(event) {
//   event.preventDefault();
  
//   // Change the anchor text to "Hired"
//   let anchor = document.getElementById('hireLink');
//   anchor.innerText = 'Hired';
//   anchor.onclick = null;
//   anchor.style.pointerEvents = 'none';

//   // Define your email ID and message
//   let email = "abisheknarayan49@gmail.com"; // Replace with your email address
//   let subject = "Exciting Opportunity - Next Steps";
//   let body = "Hi,\n\nAfter reviewing your background in [specific skills or technologies], we’re excited to move forward with you for our [Job Title] role at [Company Name]. Your experience aligns perfectly with what we’re looking for, and we believe you’d be a great addition to our team.\n\nCould we schedule a quick call to finalize next steps? Please let me know a convenient time.\n\nLooking forward to welcoming you aboard!\n\nBest,\n[Recruiter’s Name]\n[Contact Information]";

//   // Construct the mailto URL
//   let mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
//   // Open the mail client with prefilled details
//   window.location.href = mailtoURL;

//   // Log the click
//   let scriptURL = 'https://script.google.com/macros/s/AKfycbzH_OoT7Z48YDfeICviqf3GwPN45t1ZTWVr5OpQ6zVOyyUySDpmy7DLjdX-9acCrNzmIw/exec'; // Replace with your script URL
  
//   fetch(scriptURL, {
//       method: 'GET'
//   })
//   .then(response => response.text())
//   .then(data => console.log('Click recorded successfully: ' + data))
//   .catch(error => console.error('Error:', error));
// }

function handleClick(event) {
  event.preventDefault();

  // Define email details
  let email = "your-email@example.com"; // Replace with your email address
  let subject = "Exciting Opportunity - Next Steps";
  let body = "Hi,\n\nAfter reviewing your background in [specific skills or technologies], we’re excited to move forward with you for our [Job Title] role at [Company Name]. Your experience aligns perfectly with what we’re looking for, and we believe you’d be a great addition to our team.\n\nCould we schedule a quick call to finalize next steps? Please let me know a convenient time.\n\nLooking forward to welcoming you aboard!\n\nBest,\n[Recruiter’s Name]\n[Contact Information]";


  // Construct the mailto URL
  let mailtoURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Try to open the mailto link, with a fallback if unsuccessful
  try {
      // Attempt to open the user's default mail client
      window.location.href = mailtoURL;

      // Optional: Log the click if needed
      let scriptURL = 'https://script.google.com/macros/s/AKfycbzH_OoT7Z48YDfeICviqf3GwPN45t1ZTWVr5OpQ6zVOyyUySDpmy7DLjdX-9acCrNzmIw/exec';
      fetch(scriptURL, { method: 'GET' })
          .then(response => response.text())
          .then(data => console.log('Click recorded successfully: ' + data))
          .catch(error => console.error('Error:', error));

  } catch (error) {
      console.error('Mailto link failed:', error);

      // Fallback: Alert the user if the mail client didn't open
      alert("We couldn't open your mail client. Please email us directly at your-email@example.com.");
  }
}




  



