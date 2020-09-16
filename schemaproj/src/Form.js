import React from 'react'

export default function Form(props){

    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse) 
      }
    
      const onSubmit = evt => {
        evt.preventDefault();
        submit()
      }

      return(
          <form onSubmit={onSubmit}>
              <div>
                  <h2>Onboarding Form</h2>
                  <button disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>

              <label>Name &nbsp;
                  <input
                    type='text' 
                    name='name'
                    value={values.name} 
                    onChange={onChange}
                    placeholder = 'type members name' 
                  />
              </label><br />
              <label>E-Mail
                  <input
                    type='email' 
                    name='email'
                    value={values.email} 
                    onChange={onChange}
                    placeholder = 'type an email' 
                  />
              </label><br />

              <label>Password
                  <input
                    type='text' 
                    name='password'
                    value={values.password} 
                    onChange={onChange}
                    placeholder = 'enter a password' 
                  />
              </label><br />

              <h4>Terms of Service</h4>

              <label> "I Agree"
                  <input 
                  type='checkbox'
                  name='terms'
                  checked={values.terms}
                  onChange={onChange}
                  />
              </label>
              </div>
          </form>
      )
}