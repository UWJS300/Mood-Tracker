//Creates the app object
const app = {};

//Allows easy setting of default setting for timer.
const defaultTimerSetting = 45

//Just a shortcut.
app.init = function() {
    app.reminder.init();
};

// Runs reminder functionality
app.reminder = {

    init: function() {

        // Starts listening for Chrome alarms.
        chrome.alarms.onAlarm.addListener(app.reminder.trackMoodListener);

        //Sets up the values of some key variables in userPreferences object.
        userPreferences.setVars();

        // Either pulls up saved settings or uses default.
        if (localStorage.saved) {
            console.log("local storage detected.");
            userPreferences.load();
        } else {
            userPreferences.init(defaultTimerSetting);
        }
        app.reminder.run()
    },

    // This is where the reminders will be triggered from. Not hooked up yet.
    run: function() {
        const prefs = userPreferences.getPreferences();
        var enabled = prefs.enabled;
        var time = prefs.timeOption;

        if (enabled === 'not checked') {
            return
        }

        chrome.alarms.clearAll();
        this.timedReminder(time);
    },

    // Sends Chrome alarms at selected timing.
    timedReminder: function(time) {
        chrome.alarms.create('trackmood', {
            delayInMinutes: parseInt(time),
            periodInMinutes: parseInt(time)
        });
    },

    sitListener: function(alarm) {
        if(alarm.name === 'trackmood') {
        app.reminder.displayMessage();
      }
    },

    displayMessage: function() {
    const prefs = userPreferences.getPreferences();
    const title = 'Track your mood';
    const messageBody = "Please take a moment to track your mood as you read";
    const fadeTime = 5000;

    if(Notification.permission === "granted") {
        let notification = new Notification(title, {
          body: messageBody,
          icon: 'img/spine.png',
          tag: 'Posture Reminder'
        });
    }

}

};

function updateStatus() {
    //Needs implementation of notification line.
    console.log("updating status")
}


/**
 * Updates the URL input field to show current URL.
 * We could also easily take in the page title, too,
 * since content.js already gathers that.
 **/

function onPageDetailsReceived(pageDetails) {
    document.getElementById('urlBox').value = pageDetails.url;
}

/**
 * This function is not yet implemented. But this would be a good spot
 * to send data off to Firebase.
 **/

function sendFormData() {
    //Cancel standard form submit
    event.preventDefault();

    // The URL to POST our data to
    const postUrl = 'http://www.google.com';

    console.log("sending form data")
}

//Saves settings when update button is clicked.
document.addEventListener('click', function(e) {
  var target = e.target;

  if (target.id === 'update-btn') {
      e.preventDefault();
      userPreferences.save();
  }
});



// This runs when the popup HTML has fully loaded
window.addEventListener('load', function(event) {
    console.log("listening for events");

    // Handle the form submit event with sendFormData function
    document.getElementById('track-mood').addEventListener('submit', sendFormData);

    // Call the getPageInfo function in the event page, passing in
    // our onPageDetailsReceived function as the callback. This injects
    // content.js into the current tab's HTML

    chrome.runtime.getBackgroundPage(function(eventPage) {
        eventPage.getPageDetails(onPageDetailsReceived);
    });

    app.init();

});
