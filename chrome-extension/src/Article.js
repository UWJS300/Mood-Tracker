import React from 'react'

class Article extends React.Component {
  constructor(props) {
      super(props);
      this.state = {selectedOption: 'mood1', submittedMood: '', comment: '', URL: '', timeStamp: ''};
      this.handleOptionChange = this.handleOptionChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
      this.handleURLChange = this.handleURLChange.bind(this);
    }
  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
  handleCommentChange(event) {
    this.setState({comment: event.target.value});
    this.setState({timeStamp: new Date()});
  }
  handleURLChange(event) {
    this.setState({URL: event.target.value});
  }
  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault()
	this.setState({submittedMood: this.state.selectedOption});
    console.log('Current mood level:', this.state.selectedOption);
    console.log('Mood comment:', this.state.comment);
    console.log('URL:', this.state.URL);
    console.log('Timestamp:', this.state.timeStamp);


  }
  render () {
    return (
<div className="moodEntry">
	<form onSubmit={this.handleFormSubmit}>
		<div className="moodSelect">
			<div className="radio">
				<label>
				<input type="radio" value="mood1" checked={this.state.selectedOption === 'mood1'} onChange={this.handleOptionChange} />
				Mood 1
				</label>
			</div>
			<div className="radio">
				<label>
				<input type="radio" value="mood2" checked={this.state.selectedOption === 'mood2'} onChange={this.handleOptionChange}/>
				Mood 2
				</label>
			</div>
			<div className="radio">
				<label>
				<input type="radio" value="mood3" checked={this.state.selectedOption === 'mood3'} onChange={this.handleOptionChange}/>
				Mood 3
				</label>
			</div>
			<div className="radio">
				<label>
				<input type="radio" value="mood4" checked={this.state.selectedOption === 'mood4'} onChange={this.handleOptionChange}/>
				Mood 4
				</label>
			</div>
			<div className="radio">
				<label>
				<input type="radio" value="mood5" checked={this.state.selectedOption === 'mood5'} onChange={this.handleOptionChange}/>
				Mood 5
				</label>
			</div>
		</div>
		<div className="commentBox">
			<label>
				Comment: <input type="text" value={this.state.comment} onChange={this.handleCommentChange} />
			</label>
		</div>
		<div className="urlBox">
			<label>
				URL: <input type="text" value={this.state.URL} onChange={this.handleURLChange} />
			</label>
		</div>
		<input type="submit" value="Set mood" />
	</form>



		</div>



    );


  }
};

export default Article;
