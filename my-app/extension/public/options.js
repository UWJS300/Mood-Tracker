// User options are set and stored here.
const userPreferences = {

    init: function(time) {
        //Sets properties of userPreferences for working with later.
        this.timeQuestion = document.getElementById('userIntervalPref');
        this.enableQuestion= document.getElementById('app-enabled');
        this.moodQuestion= document.getElementById('track-mood')

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
        console.log("running loadPreferences")
        const preferences = this.getPreferences();
        if (preferences.enabled === 'checked') {
            this.enableQuestion.checked = true;
        } else {
            userPreferences.disableQuestions(true);
        }
        this.timeQuestion.value = preferences.timeOption;
    },


    disableQuestions: function(bool) {
    this.timeQuestion.disabled = true;
    this.moodQuestion.disabled = true;
},

enableQuestions: function(bool) {
this.timeQuestion.disabled = true;
this.moodQuestion.disabled = true;
},

    save: function() {
        console.log("saving settings")
      localStorage.setItem('time', document.getElementById('userIntervalPref'));

      if(this.enableQuestion.checked === true) {
        localStorage.setItem('enabled', 'checked');
      } else {
        localStorage.setItem('enabled', 'not checked');
      }

  }
}
