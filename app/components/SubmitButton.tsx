import React from 'react'
import { useFormikContext} from 'formik';


import AppButton from './AppButton'

interface SubmitButtonProp{
    title: string
}

const SubmitButton = ({title} : SubmitButtonProp) => {
   const {handleSubmit} = useFormikContext();

  return (
     <AppButton title={title}  onPress={handleSubmit} />
  )
}

export default SubmitButton
