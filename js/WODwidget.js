
function startCountdownTimer(WODtimesStr, startTime, base_url = '') {

    // Open a new window for the countdown timer
    const timerWindow = window.open(`${base_url}/js/WOD-timer-window.html`, 'WOD Time', 'width=300,height=300,top=0,left=25,location=no,menubar=no,toolbar=no');

    console.log(timerWindow.document.getElementById('performance_time_span'));
    // add reset button

    // add copy performance to clipboard button

    // add window close button

    // Get the performance times from the WOD string
    const WODtimes = extractTimesFromString(WODtimesStr);

    let Rx = WODtimes[0]['start'];
    let Av = WODtimes[1]['start'];
    let Sd = WODtimes[1]['end'];

    const endTimeDate = new Date(startTime.getTime() + (Sd * 60 * 1000));

    displayTimeAndPerformance();
    // Set up an interval to repeat the function every second
    const intervalId = setInterval(() => {
        // Calculate the time remaining in milliseconds on each iteration
        const remaining = endTimeDate.getTime() - Date.now();

        // If the remaining time is greater than 0, execute the function
        if (remaining > 0) {
            displayTimeAndPerformance();
        } else {
            // If the remaining time is 0 or less, clear the interval
            clearInterval(intervalId);
            displayTimeAndPerformance(); // one last gasp to display DNF
            console.log("WOD is over!");
            timerWindow.document.body.innerHTML += "<h1 style='color:red'>WOD is over!</h1>";
            /*
             timerWindow.document.body.innerHTML = "<h1 style='color:red;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);background-color: rgba(255, 255, 255, 0.7);padding: 20px;border-radius: 10px;text-align: center;'>WOD is over!</h1>";    

             // play a WOD over sound
             var audio = new Audio('./sound.mp3');
             // Play the audio
             audio.play();
             */
        }
    }, 1000); // Repeat every 1000 milliseconds (1 second)

    function displayTimeAndPerformance() {

        // Get the current time
        const currentTime = new Date();
        const elapsedTime = currentTime.getTime() - startTime.getTime();
        const elapsedMinutes = Math.floor(elapsedTime / (60 * 1000));

        // Determine the performance category based on elapsed time
        let performanceCategory;

        if (elapsedMinutes < Rx) {
            performanceCategory = 'Rx';
        } else if (elapsedMinutes >= Rx && elapsedMinutes < Av) {
            performanceCategory = 'Av';
        } else if (elapsedMinutes >= Av && elapsedMinutes < Sd) {
            performanceCategory = 'Sd';
        } else {
            performanceCategory = 'DNF';
        }

        // Display the results
        let stats = [
            `Start Time: ${startTime.toLocaleTimeString()}`,
            `End Time: ${endTimeDate.toLocaleTimeString()}`,
            `Current Time: ${currentTime.toLocaleTimeString()}`,
            `Elapsed Time: ${elapsedMinutes} min`,
            `Performance: ${performanceCategory}`
        ];
        console.log(stats.join(' - '));

        timerWindow.document.body.innerHTML = stats.map(function (element) {
            return "<h3>" + element + "</h3>";
        }).join("");
    }
}

function extractTimesFromString(inputString) {
    // Get the performance times from the WOD string.  
    // Format is Rx: 0-5 Av: 6-10 Sd: 10-12 DNF: 12+
    const regex = /(\d{1,2})\s*-\s*(\d{1,2}|\+)/g;
    const matches = inputString.match(regex);

    if (!matches) {
        return [];
    }

    // Convert matches to array of times
    const timesArray = matches.map(match => {
        const range = match.split('-');
        const startTime = parseInt(range[0], 10);
        const endTime = range[1] === '+' ? Infinity : parseInt(range[1], 10);

        return { start: startTime, end: endTime };
    });

    return timesArray;
}
