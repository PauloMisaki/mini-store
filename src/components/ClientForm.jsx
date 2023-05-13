import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, TextField, Select, FormHelperText, FormControl, InputLabel } from '@mui/material'

const renderTextField = ({
  input,
  label,
  placeholder,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    InputLabelProps={{ shrink: true }} 
    label={label}
    error={touched && invalid}
    helperText={touched && error}
    className='custom-textfield'
    placeholder={placeholder}
    {...input}
    {...custom}
  />
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>
  }
}

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel id="sex" htmlFor="sex" shrink={true}>Sexo</InputLabel>
    <Select
      native
      notched={true}
      {...input}
      {...custom}
      label='sexo'
      placeholder='Selecione'
      inputProps={{
        name: 'Sexo',
        id: 'sex'
      }}
    >
    {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

let ClientForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
          <Field name="name" component={ renderTextField } type="text" label="Nome" placeholder='Digite aqui seu nome'/>
        </div>
        <div>
          <Field name="email" component={ renderTextField } type="text" label="E-mail" placeholder='Digite aqui seu e-mail'/>
        </div>
        <div>
          
            
          
          <Field
            name="sex"
            component={ renderSelectField }
            label="Sexo"
            required
          >
            <option value='' disabled selected hidden>Selecione</option>
            <option value='masculino'>Masculino</option>
            <option value='feminino'>Feminino</option>
        </Field>
      </div>
      <Button type="submit" variant="contained" color="primary">
        FINALIZAR COMPRA
      </Button>
    </form>
  )
}

ClientForm = reduxForm({
  form: 'user_info'
})(ClientForm)

export default ClientForm