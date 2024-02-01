function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let daysBtn = document.getElementById('daysBtn');

    let hoursInput = document.getElementById('hours');
    let hoursBtn = document.getElementById('hoursBtn');

    let minutesInput = document.getElementById('minutes');
    let minutesBtn = document.getElementById('minutesBtn');

    let secondsInput = document.getElementById('seconds');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => {
        hoursInput.value = daysInput.value * 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    });

    hoursBtn.addEventListener('click', () => {
        daysInput.value = hoursInput.value / 24;
        minutesInput.value = hoursInput.value * 60;
        secondsInput.value = minutesInput.value * 60;
    });

    minutesBtn.addEventListener('click', () => {
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
        secondsInput.value = minutesInput.value * 60;
    });

    secondsBtn.addEventListener('click', () => {
        minutesInput.value = secondsInput.value / 60;
        hoursInput.value = minutesInput.value / 60;
        daysInput.value = hoursInput.value / 24;
    });
}