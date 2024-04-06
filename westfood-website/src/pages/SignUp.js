import React , { useState }from 'react'
import Header from '../components/Layout/Header.js';
import "../styles/SignUpStyle.css";
import { useNavigate} from "react-router-dom";
import validation from './SignupValidation.js';
import axios from 'axios';

const SignUp = () => {
  const [values, setValues] = useState({
    name:'',
    hname:'',
    address:'',
    email: '',
    password:'',
    phone:''
  })

  const navigate = useNavigate();
  const [errors, setErrors]= useState({})
  const handleInput = (e) =>{
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))

  }
  const handleSubmit = (e) => {
    e.preventDefault();
      setErrors(validation(values));  
      axios.post('http://localhost:8081/signup', values)
      .then(res => {
        navigate('/login');
      })
      .catch(err => console.log(err));
  };


  return (
    <>
   <Header/>
    
   <div className='header2'>SIGN UP</div>
   <div className='form2'>
      <form className="Signup-form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="name">
        Name
      </label>
      <input
        className="input"
        type="name"
        name ="name"
        
        onChange={handleInput}
      />
      {errors.name && <span className='text-danger'>{errors.name}</span>}

    <label className="label" htmlFor="email">
        Email Address
      </label>
      <input
        className="input"
        type="email"
        id="email"
        name ='email'
        
        onChange={handleInput}
      />
      {errors.email && <span className='text-danger'>{errors.email}</span>}
      <label className="label" htmlFor="hname">
        Hotel Name
      </label>
      <input
      className="input"
      type="hname"
      id="hname"
      name ='hname'
      
      onChange={handleInput}
    />
    {errors.hname && <span className='text-danger'>{errors.hname}</span>}
    <label className="label" htmlFor="address">
        Address
      </label>
      <input
      className="input"
      type="address"
      id="address"
      name ='address'
    
      onChange={handleInput}
    />
    {errors.address && <span className='text-danger'>{errors.address}</span>}

<label className="label" htmlFor="password">
        Password
      </label>
      <input
      className="input"
      type="password"
      id="password"
      name ='password'
    
      onChange={handleInput}
    />
    {errors.password && <span className='text-danger'>{errors.password}</span>}


<label className="label" htmlFor="phone">
phone No.
      </label>
      <input
      className="input"
      type="phone"
      id="phone"
      name ='phone'
      onChange={handleInput}
    />
    {errors.phone && <span className='text-danger'>{errors.phone}</span>}


<center>
    <button className="button" type="submit" >
      SUBMIT
    </button>
 
    </center>
    
   
  </form>
  
  </div>
  
  <p className="link" >
          Already have an account?{' '}
          <a href="/login" >
            Login here...
          </a>
        </p>
   </>
  )
}

export default SignUp
