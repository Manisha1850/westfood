import React,{ useState } from 'react';
import "../styles/LoginStyle.css";
import Header from '../components/Layout/Header';
import "../styles/SignUpStyle.css";
import { useNavigate} from "react-router-dom";
import validation from './loginValidation';
import axios from 'axios';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password:''
  })

  const navigate = useNavigate();
  const [errors, setErrors]= useState({})
  const handleInput = (e) =>{
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}))

  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    axios.post('http://localhost:8081/login', values)
      .then(res => {
        if (res.data === "Success") {
          
          navigate('/userpage');
        } else {
          alert("No record existed");
        }
      })
      .catch(err => console.log(err));
  };
  
  

  return (
    <>
    <Header/>
    <div className='header2'>LOGIN</div>
      <form action="" className="login-form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="email">
        Email Address
      </label>
      <input
        className="input"
        type="email"
        name="email"
        id="email"
        onChange={handleInput}
      />
      {errors.email && <span className='text-danger'>{errors.email}</span>}
      <label className="label" htmlFor="password">
        Password
      </label>
      <input
      className="input"
      type="password"
      id="password"
      name='password'
      onChange={handleInput}
      
    />
    {errors.password && <span className='text-danger'>{errors.password}</span>}

    
    <button className="button" type="submit" >
      SUBMIT
    </button>
    
    
   
  </form>
  <div style={{ marginBottom: '100px' }}></div>
  <p className="link" >
          Don't have an account?{' '}
          <a href="/signup" >
            Sign Up here...
          </a>
        </p>
  
    </>
  )
}

export default Login
