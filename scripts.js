const alarm_id = 'alarm_001'
document.getElementById("myBtn").addEventListener("click", function() {
    let dt = new Date();
    let mins = document.getElementById('givenInput').value;
    dt.setMinutes(dt.getMinutes() + parseInt(mins));
    chrome.alarms.create(alarm_id, {when: dt.getTime()});
});

document.getElementById('clearAlarm').onclick = () => {
    chrome.alarms.clear(alarm_id);
}