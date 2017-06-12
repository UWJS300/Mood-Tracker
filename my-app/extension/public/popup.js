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

        //Sets up the values of some key variables in userPreferences object.
        userPreferences.setVars();

        // Either pulls up saved settings or uses default.
        if (localStorage.saved) {
            console.log("local storage detected.");
            userPreferences.load();
        } else {
            userPreferences.init(defaultTimerSetting);
        }
    },

    // This is where the reminders will be triggered from. Not hooked up yet.
    run: function() {
        const prefs = userPreferences.getPreferences();
        var time = prefs.timeOption;
        chrome.alarms.clearAll();
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
