import React from 'react'
import { FormikValues, useFormikContext } from 'formik'


import AppTextInput from './AppTextInput'
import  ErrorMessage  from './ErrorMessage'

interface AppFormFieldProp{
  name: string
}

const AppFormField = ({name, ...otherProps}: AppFormFieldProp) => {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
  return (
    <>
    <AppTextInput
      onBlur={() => setFieldTouched(name)}
      onChangeText={handleChange(name)}
      {...otherProps}
    />
   
    </>
  )
}

export default AppFormField
