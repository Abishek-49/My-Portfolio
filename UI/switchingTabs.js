document.addEventListener("DOMContentLoaded", function () {
    let section3 = document.querySelector('.section3');
    let section4 = document.querySelector('.section4');
    section4.style.display = 'none'; // Initially hide section6

    let switch1 = document.querySelector('.switching1 .container .switch1');
    let switch2 = document.querySelector('.switching1 .container .switch2');

    switch1.addEventListener('click', function () {
        switch1.classList.add('active');
        switch2.classList.remove('active');
        section3.style.display = 'block';
        section4.style.display = 'none';
    });

    switch2.addEventListener('click', function () {
        switch2.classList.add('active');
        switch1.classList.remove('active');
        section4.style.display = 'block';
        section3.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let section5 = document.querySelector('.section5');
    let section6 = document.querySelector('.section6');
    section6.style.display = 'none'; // Initially hide section6

    let switch1 = document.querySelector('.switching2 .container .switch1');
    let switch2 = document.querySelector('.switching2 .container .switch2');

    switch1.addEventListener('click', function () {
        switch1.classList.add('active');
        switch2.classList.remove('active');
        section5.style.display = 'block';
        section6.style.display = 'none';
    });

    switch2.addEventListener('click', function () {
        switch2.classList.add('active');
        switch1.classList.remove('active');
        section6.style.display = 'block';
        section5.style.display = 'none';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let section7 = document.querySelector('.section7');
    section7.style.display = 'none'; // Initially hide section7

    let switch1 = document.querySelector('.switching3 .container .switch1');
    let switch2 = document.querySelector('.switching3 .container .switch2');
    let section8 = document.querySelector('.section8');

    switch1.addEventListener('click', function () {
        switch1.classList.add('active');
        switch2.classList.remove('active');
        section7.style.display = 'none';
        section8.style.display = 'block';
    });

    switch2.addEventListener('click', function () {
        switch2.classList.add('active');
        switch1.classList.remove('active');
        section8.style.display = 'none';
        section7.style.display = 'block';
    });
});