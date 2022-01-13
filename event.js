chrome.alarms.onAlarm.addListener((alarm) => {
    chrome.windows.create({
        width:200,
        height: 100,
        type: 'popup',
        url: 'alert.html'
    });
});