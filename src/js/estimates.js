import React, { PropTypes } from 'react'

class Estimates extends React.Component {
  render () {
    return (
      <main className="estimates">
          <section>
            <h1 className="estimates-title">Free Estimates</h1>
          <form className="estimate-form" action="mailto:hinsonpoolcare@gmail.com" method="post" onClick="submit" encType="text/plain">
            <input className="estimate-info" name="Name" type="text" placeholder="Name"/>
            <input className="estimate-info" name="Email or Phone" type="text" placeholder="Email or Phone"/>
            <input className="estimate-info" name="City" type="text" placeholder="City"/>
            <select className="estimate-info" name="Pool Type" type="text">
              <option className="pool-types" name="Residential">Residential</option>
              <option className="pool-types" name="Commercial">Commercial</option>
              <option className="pool-types" selected>Pool Type</option>
            </select>
            <button className="estimate-btn" type="submit" value="submit">Send</button>
          </form>
          </section>
      </main>
    )
  }
}

export default Estimates;
