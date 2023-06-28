function generateRandomNumber(delay) {

    document.getElementById("delay").innerHTML = `Generating random number in ${delay} seconds...`;
    setTimeout(() => {

        document.getElementById("message").innerHTML = "Generating random number...";

        let countdown = delay;

        const interval = setInterval(() => {


            document.getElementById("countDown").innerHTML = `Time remaining: <span>${countdown}</span> seconds...`;

            countdown--;

            if (countdown === -1) {
                clearInterval(interval);
                const randomNum = Math.floor(Math.random() * 100) + 1;


                document.getElementById("number").innerHTML = `Random number generated: ${randomNum}`;
            }
        }, 1000);
    }, delay * 1000);
}

const delay = 3; // Modify this variable to adjust the delay
generateRandomNumber(delay);