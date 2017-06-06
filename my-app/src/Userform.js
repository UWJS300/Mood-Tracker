import React from 'react'

import './Userform.css'

const Userform = (props) => {
  return (
      <form action="firebase">

        News site URL:<br />
        <input type="text" name="siteUrl" /><br />

        Current Mood (input a number between 1 and 5):<br />
        <input type="text" name="currentMood" /><br />

        Comments on reading: <br />
        <input type="text" name="comment" /><br />

        <input type="hidden" name="timeStamp" step="1" />
        <input type="submit" value="Submit" />

      </form>
  )
}

export default Userform
