import FieldsRow from './FieldsRow/FieldsRow'
import './FormFieldsStyle.css'

const FormFields = () => {
  return (
    <div className='aj-form-fields'>
      <FieldsRow firstText="First Name" secondText="Last name"/>
      <FieldsRow firstText="Password" secondText="Repeat password"/>
    </div>
  )
}

export default FormFields