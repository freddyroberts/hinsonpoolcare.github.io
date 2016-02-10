import React, { PropTypes } from 'react'

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <div className="contact-bar">
          <a className="contact-links" href="https://www.facebook.com/Hinson-Pool-Care-524902811014409/"><i className="icon-facebook-squared"></i></a>
          <a className="contact-links" href="mailto:hinsonpoolcare@gmail.com"><i className="icon-mail-squared"></i></a>
          <a className="contact-links" href="tel:1-334-701-1930"><i className="icon-phone-squared"></i></a>
        </div>
        <div className="legal-bar">
        <small className="copyright">&copy; Hinson Pool Care</small>
        <a className="freddyroberts" href="http://freddyroberts.com">FreddyRoberts</a>
        </div>
      </footer>
    )
  }
}

export default Footer;
