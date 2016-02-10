import React, { PropTypes } from 'react'

class Contact extends React.Component {
  render () {
    return (
      <main className="contact">
        <div className="contact-img">
          <p className="contact-title">Contact Micheal</p>
          <a className="contact-links" href="mailto:hinsonpoolcare@gmail.com"><i className="icon-mail-alt"></i>hinsonpoolcare@gmail.com</a>
          <a className="contact-links" href="tel:1-334-701-1930"><i className="icon-phone"></i>(334)-701-1930</a>
        </div>
      </main>
    )
  }
}

export default Contact;
