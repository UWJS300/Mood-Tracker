import React, { Component } from 'react';
import screenshot from './img/appScreenshot.png';



class WelcomePage extends Component {
  render() {
    return (
      <div className="welcomePage">
        <h1>The Mindful Reader</h1>
        <h2>
          What does it do?
        </h2>
        <p>
          This app allows you to track your mood while you read the news or browse other websites. Tracking your mood as you engage in your everyday online activities can give you an opportunity to better understand how the technology you use affects you.
        </p>
        <h2>
          How does it work?
        </h2>
        <p>
          This app works in the Google Chrome browser as a Chrome extension. Once the extension is installed, you can set alerts to log your mood at intervals. Then, you can view your mood history.
        </p>
        <img className="screenshot" src={screenshot} alt="screenshot of Chrome extension with New York Times" />
        <h2>About</h2>
        <p>This app was partly inspired by the book <em>Mindful Tech</em> by David Levy, a University of Washington professor. This book contains exercises in the mindful use of technology, such as logging your mood, that could be conducted using this app.</p>

        <p>This app was created as as class project by Seth McOmber, Hannah Notess, and James Trimarco for the Certificate in JavaScript Programming course at University of Washington.</p>
      </div>
    )
  }
}

export default WelcomePage;
