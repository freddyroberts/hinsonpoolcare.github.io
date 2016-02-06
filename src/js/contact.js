import React, { PropTypes } from 'react'

class Contact extends React.Component {
  render () {
    return (
      <main>
        <h1>Contact</h1>
        <div>
          <p>call or email</p>
          <a href="mailto:Micheal@HinsonPoolCare.com">Micheal@HinsonPoolCare.com</a>
          <a href="tel:1-334-701-1930">(334)-701-1930</a>
        </div>
      </main>
    )
  }
}

export default Contact;
