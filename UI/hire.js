// function updateHireStatus(anchor) {
    
//     anchor.innerText = "Hired";

    
//     var xhr = new XMLHttpRequest();
//     var url = "https://script.google.com/macros/s/AKfycbzpqlWaSPpqTH9qolmWBPX2A3UOjMI0-i0qq7A_TCe_bDpyQl1q8WjX8bWJSS01N5kW7A/exec";
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log("Data sent successfully");
//       }
//     };
//     var data = JSON.stringify({"message": "hired"});
//     xhr.send(data);
//   }

function handleClick(event) {

    event.preventDefault();
    // Change the anchor text to "Hired"
    let anchor = document.getElementById('hireLink');
    anchor.innerText = 'Hired';

    anchor.onclick=null;
    anchor.style.pointerEvents='none';
  
    // Show an alert box
    // alert('Hired');
  
    let scriptURL = 'https://script.google.com/macros/s/AKfycbzH_OoT7Z48YDfeICviqf3GwPN45t1ZTWVr5OpQ6zVOyyUySDpmy7DLjdX-9acCrNzmIw/exec'; // Replace this with your deployed web app URL
    
    fetch(scriptURL, {
      method: 'GET'
    })
    // .then(response => {
    //     if(!response.ok){
    //         throw new Error ('network response was not ok ' + response.statusText);
    //     }
    //        return response.text();
    //     })
    .then(response => response.text())
    .then(data => console.log('Click recorded successfully: ' + data))
    .catch(error => console.error('Error:', error));
  }
  
  



