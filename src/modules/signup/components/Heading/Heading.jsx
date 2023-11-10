import './HeadingStyle.css'

const Heading = ({logo, text}) => {
  return (
    <div className='aj-heading'>
      <img className='aj-logo' src={logo} alt="" />
      <p>{text}</p>
    </div>
  )
}

export default Heading