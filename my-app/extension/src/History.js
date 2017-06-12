import React from 'react'
import DataGrab from './DataGrab'
import './App.css';


class History extends React.Component {
  constructor(props) {
      super(props);
      this.state = {selectedOption: 'mood1', submittedMood: '', comment: '', URL: '', timeStamp: ''};
      this.handleOptionChange = this.handleOptionChange.bind(this);
    }
  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault()

  }
  render () {
    return (

		<div className="moodGraph">
      <h3>Mood History</h3>
	     <div className="graphThumb"><DataGrab />
		   </div>
		   <button id="viewHistory">See more history</button>		
    </div>





    );


  }
};

export default History;
