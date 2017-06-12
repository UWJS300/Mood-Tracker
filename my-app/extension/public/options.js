// User options are set and stored here.
const userPreferences = {

    //Sets properties of userPreferences for working with later.
    setVars: function() {
        this.timeQuestion = document.getElementById('userIntervalPref');
        this.enableQuestion= document.getElementById('app-enabled');
        this.moodQuestion= document.getElementById('track-mood')
    },

    init: function(time) {

        //Sets values of app to defaults.
        this.timeQuestion.value = time;
        this.enableQuestion.checked = true;

        //Stores values to local storage.
        localStorage.setItem('time', time);
        localStorage.setItem('enabled', 'checked');
        localStorage.setItem('saved', 'true');
    },

    getPreferences: function() {
      const allPrefs = {
        time: localStorage.time,
        enabled: localStorage.enabled
        };
        return allPrefs;
    },

// Restores app to previously set condition on second load.
    load: function() {

        const preferences = this.getPreferences();

        if(isNaN(preferences.time)) {
            console.log("setting default");
            this.timeQuestion.value = defaultTimerSetting;
        } else {
            console.log("setting preferred value");
            this.timeQuestion.value = preferences.time;
        }

        if (preferences.enabled === 'checked') {
            this.enableQuestion.checked = true;
        } else {
            this.enableQuestion.checked = false;
            //add functionality for disabling app here.
        }

    },


    save: function() {
      localStorage.setItem('time', this.timeQuestion.value);

      if(this.enableQuestion.checked === true) {
        localStorage.setItem('enabled', 'checked');
      } else {
        localStorage.setItem('enabled', 'not checked');
      }

  }
}
