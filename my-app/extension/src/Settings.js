import React from 'react'

class Settings extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: 'Enter sources', topics: 'Enter topics', showHideTab: 'show'};
      this.handleSourcesChange = this.handleSourcesChange.bind(this);
      this.handleSourcesSubmit = this.handleSourcesSubmit.bind(this);
      this.handleTopicsChange = this.handleTopicsChange.bind(this);
      this.handleTopicsSubmit = this.handleTopicsSubmit.bind(this);
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
<div className="innerTab">
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

		<input type="submit" value="Update alerts" id="update-settings-btn" />
		</form>
      </div>
      </div>
      </div>





</div>





    );


  }
};

export default Settings;
