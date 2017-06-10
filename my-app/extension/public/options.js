// User options are stored here.
const userPreferences = {
    timeQuestion: document.getElementById('userIntervalPref').value,
    enableQuestion: document.getElementById('enabled'),

    init: function(time) {
        localStorage.setItem('time', time);
    }

    getPreferences: function() {
      var allPrefs = {
        timeOption: localStorage.time
        };
        return allPrefs;
    },

};
