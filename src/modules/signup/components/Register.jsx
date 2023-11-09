import './../../signup/assets/RegisterStyle.css';
import image from './../../signup/assets/Illustration.png';

const Register = () => {
return (
    <div className="Register">
        <div className='part1'>
            <h2>Join or Create a Workspace</h2>
            <div className='p'>
            <p>Connect with others by joining an existing workspace or create a new one to collaborate with your team.</p>
            </div>
            <div className='inputbutton'>
            <div className='input'>
                <input placeholder='Your workspace URL'></input>
                <h5>.artificium.app</h5>
                </div>
                <button>Join workspace</button>
            </div>
            <div className='lines'>
                <div className='line'></div>
                <span>or</span>
                <div className='line'></div>
            </div>
            <button>Create new Workspace</button>
        </div>


        <div className="image">
            <img src={image} alt='Ai' />
        </div>
    </div>
  )
}

export default Register