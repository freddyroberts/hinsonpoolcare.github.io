import React, { PropTypes } from 'react'

class Estimates extends React.Component {
  render () {
    return (
      <main>
        <h1>Free Estimates</h1>
          <form action="mailto:freddyroberts9@gmail.com" method="post" onClick="submit" encType="text/plain">
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Email or Phone"/>
            <input type="text" placeholder="City"/>
            <select type="text">
              <option value="Private" selected>Private</option>
              <option value="Commercial" selected>Commercial</option>
              <option disabled selected>Pool Type</option>
              <input type="submit" placeholder="send" value="submit"/>
            </select>
          </form>
      </main>
    )
  }
}

export default Estimates;
