import React from 'react'
import GetData from './GetData'
  
class History extends React.Component {
 
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault()
  
  }
    
  render () {

    return (

		<div className="moodGraph">
          <div className="graphThumb">
        <GetData text="test"/>
          </div>
          <button id="viewHistory" onClick={this.handleFormSubmit}>See more history</button>
		</div>

    );
  
	  
  }
};

export default History;