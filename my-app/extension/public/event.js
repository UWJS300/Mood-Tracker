/**
* The function below handles getting information from the background page.
**/

// This function is called onload in the popup code
function getPageDetails(callback) {

    // Inject the content script into the current page
    chrome.tabs.executeScript(null, { file: 'content.js' });

    // Perform the callback when a message is received from the content script
    chrome.runtime.onMessage.addListener(function(message)  {
        // Call the callback function
        callback(message);

    });
};

/**
* The functions below handle the notifications system.
**/


// This function listens for Chrome's alarms, which are set in app.reminder.
function listenForAlarms() {
    // Starts listening for Chrome alarms.
    chrome.alarms.onAlarm.addListener(trackMoodListener);
};

// Sends Chrome alarms at selected timing.
function timedReminder(time) {
    chrome.alarms.create('trackmood', {
        delayInMinutes: parseInt(time),
        periodInMinutes: parseInt(time)
    });
};

// Checks the alarm and launches the notification.
function trackMoodListener(alarm) {
    if(alarm.name === 'trackmood') {
        console.log("heard the mood tracker alarm");
        checkNotification();
  }
};

// Sends the permissions before sending notification.
function checkNotification() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
      notifyReader();
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        notifyReader();
      }
    });
  }
  };

  // Sends the notification.
function notifyReader() {
    console.log("notifying reader");
    const title = 'Your Mood Tracker';

    const notification = new Notification(title, {
      body: 'Please open the Mood Tracker extension and log your mood.',
      icon: 'icon48.png',
      tag: 'Mood Track Reminder',
      renotify: true
    });
};
