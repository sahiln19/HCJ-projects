// Set the date we're counting down to
const launchDate = new Date("Jul 1, 2024 00:00:00").getTime();

// Update the count down every 1 second
const countdownFunction = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the launch date
    const distance = launchDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with class="number"
    document.querySelector('.days .number').innerHTML = days;
    document.querySelector('.hours .number').innerHTML = hours;
    document.querySelector('.minutes .number').innerHTML = minutes;
    document.querySelector('.seconds .number').innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector('.days .number').innerHTML = "0";
        document.querySelector('.hours .number').innerHTML = "0";
        document.querySelector('.minutes .number').innerHTML = "0";
        document.querySelector('.seconds .number').innerHTML = "0";
        document.querySelector('header').innerHTML = "We are live!";
        document.querySelector('.email p').innerHTML = "Thank you for your interest!";
    }
}, 1000);
