import React, { PropTypes } from 'react'

class Contact extends React.Component {
  render () {
    return (
      <main className="contact">
        <div className="contact-img">
          <p className="contact-title">Contact Micheal</p>
          <a className="contact-info" href="mailto:hinsonpoolcare@gmail.com">hinsonpoolcare@gmail.com</a>
          <a className="contact-info" href="tel:1-334-701-1930">(334)-701-1930</a>
        </div>
      </main>
    )
  }
}

export default Contact;
