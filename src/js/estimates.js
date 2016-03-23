import React, { PropTypes } from 'react'

class Estimates extends React.Component {
  constructor(props) {
    super(props)

    this.emailForm = this.emailForm.bind(this);
  }

  emailForm(){
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let city = this.refs.phone.value;
    let pooltype = this.refs.pooltype.value;
    console.log(phone);

    if(!name || !phone || !city || !pooltype) {
      alert("Pease fill in form!");
    } else if(!(phone.length === 10 || phone.length === 11)) {
      alert("Please enter a correct  phone number with areacode!");
    }
  }

  render () {
    return (
      <main className="estimates">
          <section>
            <h1 className="estimates-title">Free Estimates</h1>
          <form className="estimate-form" method="post" action="mailto:hinsonpoolcare@gmail" encType="text/plain">
            <input className="estimate-info" ref="name" name="name" type="text" placeholder="Name"/>
            <input className="estimate-info" ref="phone" name="phone" type="text" placeholder="(555) 555 5555"/>
            <input className="estimate-info" ref="city" name="city" type="text" placeholder="City"/>
            <select className="estimate-info" ref="pooltype" name="pooltype" type="text">
              <option className="pooltype" name="Residential">Residential</option>
              <option className="pooltype" name="Commercial">Commercial</option>
              <option className="pooltype" selected="Pool Type">Pool Type</option>
            </select>
            <button className="estimate-btn" onClick={this.emailForm} type="submit">Send</button>
          </form>
          </section>
      </main>
    )
  }
}

export default Estimates;
