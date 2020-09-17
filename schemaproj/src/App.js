import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form'
import OnboardCard from './OnboardCard'
import schema from './validation/schema'
import axios from 'axios'
import * as yup from 'yup'
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: false,
}

const initialDisabled = true

function App() {

  const [onboard, setOnboard] = useState([])
  const [formValues, setformValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewOnboard = newOnboard => {
    axios.post('https://reqres.in/api/users', newOnboard)
    .then(res =>{
      setOnboard([...onboard, newOnboard])
      setformValues(initialFormValues)
    })
    .catch(err =>{
      debugger
      console.log(err)
    })
  }

  const validate = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]:""
      })
    })

    .catch(err =>{
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setformValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOnboard = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      term: formValues.term
    }
    postNewOnboard(newOnboard)
  }

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div>
      <header><h1>Onboarding Application</h1></header>
      <Form
      values = {formValues}
      change = {inputChange}
      submit = {formSubmit}
      disabled = {disabled}
      errors = {formErrors}
      />

      {
        onboard.map(index => {
          return(
            <OnboardCard key={index.name} details={index} />
          )
        })
      }

    </div>
  );
}

export default App;
