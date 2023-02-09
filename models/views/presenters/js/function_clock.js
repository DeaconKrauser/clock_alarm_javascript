const form = document.querySelector("#form-alarm");
const alarmMessage = document.querySelector("#alarm-message");
const alarmSound = document.querySelector("#alarm-sound");
const stopAlarmButton = document.querySelector("#stopAlarmButton");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const time = document.querySelector("#time").value;
    const now = new Date();
    const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), time.split(":")[0], time.split(":")[1]);

    if (alarmTime <= now) {
    alarmTime.setDate(alarmTime.getDate() + 1);
    }

    alarmMessage.innerHTML = "<div class='alert alert-success'>Alarm set for " + time + "</div>";
    alarmMessage.style.display = "block";

    setTimeout(function() {
    alarmMessage.innerHTML = "<div class='alert alert-danger'>Wake up!</div>";
    alarmMessage.style.display = "block";
    stopAlarmButton.style.display = "block";
    alarmSound.play();
    }, alarmTime - now);
});

stopAlarmButton.addEventListener("click", function() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    stopAlarmButton.style.display = "none";
    alarmMessage.style.display = "none";
});