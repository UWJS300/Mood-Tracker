//Creates the app object
const app = {};

app.init = function() { app.reminder.init(); };

app.reminder = {
    getUserIntervalPref() {
        const userIntervalPref = document.getElementById('userIntervalPref');
        console.log({timePreference: userIntervalPref});
    }
};

app.reminder.getUserIntervalPref();

/**
* Updates the URL input field to show current URL.
* We could also easily take in the page title, too,
* since content.js already gathers that.
**/

function onPageDetailsReceived(pageDetails)  {
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


// This runs when the popup HTML has fully loaded
window.addEventListener('load', function(event) {
    //console.log("listening for events");

    // Handle the form submit event with sendFormData function
    document.getElementById('track-mood').addEventListener('submit', sendFormData);

    // Call the getPageInfo function in the event page, passing in
    // our onPageDetailsReceived function as the callback. This injects
    // content.js into the current tab's HTML

    chrome.runtime.getBackgroundPage(function(eventPage) {
        eventPage.getPageDetails(onPageDetailsReceived);
  });

});
