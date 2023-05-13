import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="name">Nome</label>
          <Field name="name" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="sex">Sexo</label>
          <Field name="sex" component="input" type="text"/>
      </div>
      <button type="submit">FINALIZAR COMPRA</button>
    </form>
  )
}

ContactForm = reduxForm({
  form: 'user_info'
})(ContactForm)

export default ContactForm