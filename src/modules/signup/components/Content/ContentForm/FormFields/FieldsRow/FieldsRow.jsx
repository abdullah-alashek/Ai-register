import FormInput from '../../FormInput/FormInput'
import './FieldsRowStyle.css'

const FieldsRow = ({firstText, secondText}) => {
  return (
    <div className='aj-fields-row'>
      <FormInput text={firstText}/>
      <FormInput text={secondText}/>
    </div>
  )
}

export default FieldsRow