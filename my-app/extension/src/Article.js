import React from 'react'
import veryDissatisfied from './img/ic_sentiment_very_dissatisfied_black_24px.svg'
import dissatisfied from './img/ic_sentiment_dissatisfied_black_24px.svg'
import neutral from './img/ic_sentiment_neutral_black_24px.svg'
import satisfied from './img/ic_sentiment_satisfied_black_24px.svg'
import verySatisfied from './img/ic_sentiment_very_satisfied_black_24px.svg'

class Article extends React.Component {
  constructor(props) {
      super(props);
      this.state = {selectedOption: 'mood1', submittedMood: '', comment: '', URL: '', timeStamp: '', important: false};
      this.handleOptionChange = this.handleOptionChange.bind(this);
	  this.handleImportantOptionChange = this.handleImportantOptionChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
      this.handleURLChange = this.handleURLChange.bind(this);
    }
  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
handleImportantOptionChange(event) {
	const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      important: value
    });
  }
  handleCommentChange(event) {
    this.setState({comment: event.target.value});
    this.setState({timeStamp: new Date()});
  }
  handleURLChange(event) {
    event.preventDefault()
    this.setState({URL: event.target.value});
  }
  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault()
	this.setState({submittedMood: this.state.selectedOption});
    console.log('Current mood level:', this.state.selectedOption);
	console.log('Important?:', this.state.important);
    console.log('Mood comment:', this.state.comment);
    console.log('URL:', this.state.URL);
    console.log('Timestamp:', this.state.timeStamp);
  }
  render () {
    return (

<div className="moodEntry">
  <h3>Current Mood</h3>
  <div className="urlBox" >

  </div>
	<form onSubmit={this.handleFormSubmit} id="track-mood">
    <label>
      URL: <input type="text" id="urlBox" value={this.state.URL} onChange={this.handleURLChange} />
    </label>
    <div className="moodSelect">
      <div className="radio">
				<label>
				<input type="radio" value="mood1" checked={this.state.selectedOption === 'mood1'} onChange={this.handleOptionChange} />
        <img className="moodFace" src={veryDissatisfied} alt="very dissatisfied"/>
				</label>
			</div>
			<div className="radio">
				<label>
				<input type="radio" value="mood2" checked={this.state.selectedOption === 'mood2'} onChange={this.handleOptionChange}/>
        <img className="moodFace" src={dissatisfied} alt="dissatisfied"/>
				</label>
			</div>
			<div className="radio">
				<label>
				<input type="radio" value="mood3" checked={this.state.selectedOption === 'mood3'} onChange={this.handleOptionChange}/>
        <img className="moodFace" src={neutral} alt="neutral"/>
				</label>
			</div>
			<div className="radio">
				<label>
				<input type="radio" value="mood4" checked={this.state.selectedOption === 'mood4'} onChange={this.handleOptionChange}/>
        <img className="moodFace" src={satisfied} alt="satisfied"/>
				</label>
			</div>
			<div className="radio">
				<label>
				<input type="radio" value="mood5" checked={this.state.selectedOption === 'mood5'} onChange={this.handleOptionChange}/>
        <img className="moodFace" src={verySatisfied} alt="very satisfied"/>
				</label>
			</div>
		</div>
		<div className="importantEntry">
			<label>
				<input type="checkbox" name="important" checked={this.state.important} onChange={this.handleImportantOptionChange}/>
				Important
			</label>
		</div>

		<div className="commentBox">
			<label>
				Comment: <input type="text" value={this.state.comment} onChange={this.handleCommentChange} />
			</label>
		</div>

		<input type="submit" id="current-mood-button" value="Log my mood" />
	</form>





		</div>



    );


  }
};

export default Article;
