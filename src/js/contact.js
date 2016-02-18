import React, { PropTypes } from 'react'

class Contact extends React.Component {
  render () {
    return (
      <main className="contact">
        <div className="contact-img">
          <span className="contact-title">Contact Micheal</span>
          <dl>
            <dt className="contact-terms">Mail:</dt>
            <dd className="contact-details"><a className="contact-info" href="mailto:hinsonpoolcare@gmail.com">hinsonpoolcare@gmail.com</a></dd>
          </dl>
          <dl>
            <dt className="contact-terms">Phone:</dt>
            <dd className="contact-details"><a className="contact-info" href="tel:1-334-701-1930">(334)-701-1930</a></dd>
          </dl>
        </div>
      </main>
    )
  }
}

export default Contact;
