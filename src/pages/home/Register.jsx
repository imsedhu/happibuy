import React from 'react'

const title = (
  <h2 className='title'>Join on day long free workshop for <b>Advance <span>Mastering</span></b> on sales</h2>
)
const subtitle = "save the day";
const desc = "Limited Time Offer! Hurry UP";

const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row g-4 row-cols-lg-2 row-cols-1 align-items-center">
          <div className="col">
            <div className="section-header">
              <span className='subtitle'>{subtitle}</span>
              {title}
              <p>{desc}</p>
            </div>
          </div>

          <div className="col">
            <div className="section-wrapper">
              <h4>Register Now</h4>
              <form  className="register-form">
                <input type="text" name='name' placeholder='Username' className='reg-input' />
                <input type="text" name='email' placeholder='Email' className='reg-input' />
                <input type="number" name='number' placeholder='Phone' className='reg-input' />
                <button className="lab-btn" type='submit'>
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register