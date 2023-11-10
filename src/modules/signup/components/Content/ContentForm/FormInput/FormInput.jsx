import './FormInputStyle.css'

const FormInput = ({text}) => {
  return (
    <div className='aj-form-input'>
      <p>{text}</p>
      <input type="text" placeholder={text}/>
    </div>
  )
}

export default FormInput