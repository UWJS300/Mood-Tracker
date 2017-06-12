import React from 'react'

class Settings extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 'Enter sources', topics: 'Enter topics', time: '20', showHideTab: 'show'};
      this.handleSourcesChange = this.handleSourcesChange.bind(this);
      this.handleSourcesSubmit = this.handleSourcesSubmit.bind(this);
      this.handleTopicsChange = this.handleTopicsChange.bind(this);
      this.handleTopicsSubmit = this.handleTopicsSubmit.bind(this);
      this.handleTimeChange = this.handleTimeChange.bind(this);
      this.handleAlertsSubmit = this.handleAlertsSubmit.bind(this);
      this.handleTabChange = this.handleTabChange.bind(this);
    }

  handleSourcesChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSourcesSubmit(event) {
    event.preventDefault()
    console.log('Sources:', this.state.value);

  }

  handleTopicsChange(event) {
    this.setState({
      topics: event.target.value
    });
   }

  handleTopicsSubmit(event) {
    event.preventDefault()
    console.log('Topics:', this.state.topics);

  }

  handleTimeChange(event) {
    this.setState({
      time: event.target.value
    });
   }

  handleAlertsSubmit(event) {
    event.preventDefault()
    console.log('Time:', this.state.time, 'minutes');

  }

  handleTabChange(event) {
    var css = (this.state.showHideTab === "hidden") ? "show" : "hidden";
    this.setState({
      showHideTab: css
    });
    console.log('tab:', this.state.showHideTab)
   }



  render () {

    return (

      <div className="settingsInner">

		<h3>Settings</h3>

      <div className="settingsOption sources">
      <h4 onClick={this.handleTabChange}>Sources</h4>
      <div className={this.state.showHideTab}>
      <form onSubmit={this.handleSourcesSubmit}>


		<label>
				Mood tracker will ask for your mood while browsing the following sites: <textarea value={this.state.value}  onChange={this.handleSourcesChange} /><div className="subLabel">Separate sites with commas</div>
			</label>

		<input type="submit" value="Update sources" />
		</form>
      </div>
      </div>

      <div className="settingsOption topics">
      <h4 onClick={this.handleTabChange}>Topics</h4>
      <div className={this.state.showHideTab}>
      <form onSubmit={this.handleTopicsSubmit} className={this.props.showHideTab}>

		<label>
				Track how different topics affect your mood: <textarea value={this.state.topics}  onChange={this.handleTopicsChange} /><div className="subLabel">Separate topics with commas</div>
			</label>
		<input type="submit" value="Update topics" />
		</form>
      </div>
      </div>

      <div className="settingsOption alerts">
      <h4 onClick={this.handleTabChange}>Alerts</h4>
      <div className={this.state.showHideTab}>
      <form onSubmit={this.handleAlertsSubmit} className={this.props.showHideTab}>

		<label>
				Track my mood every: <input type="number" id="userIntervalPref" min="1" max="120" value={this.state.time}  onChange={this.handleTimeChange} /> minutes
			</label>
		<input type="submit" value="Update alerts" id="update-btn" />
		</form>
      </div>
      </div>





</div>





    );


  }
};

export default Settings;
