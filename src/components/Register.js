import React, { useState, useEffect } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import {AiOutlineMail, AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { registerUser } from '../slices/authSlice'
import { useSelector } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";


const Register = () => {
  const initialValue = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    password2: '',
  };
  const [user, setUser] = useState(initialValue)
  const [errors, setErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value} = e.target;
    setUser({...user, [name]: value})
    console.log(user);
  }

  const validate = (values) => {
      const errorss = {};
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/
      if (!values.first_name) {
        errorss.first_name = 'First Name is Required!'
      }
      if (!values.email) {
        errorss.email = 'Email Address is Required!'
      }else if (!regex.test(values.email)) {
        errorss.email = 'This is not a valid email address'
      }
      if (!values.password) {
        errorss.password = 'Password is Required!'
      }else if (values.password.length < 8) {
        errorss.password = 'Password must be 8 or more than 8 characters'
      }else if (values.password.length > 12) {
        errorss.password = 'Password cannot exceed more than 12 characters'
      }
      if (!values.password2) {
        errorss.password2 = 'Please Confirm Password!'
      }else if (values.password2 !== values.password) {
        errorss.password2 = 'Password does not match'
      }

      return errorss;
  }

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(user);
    }
  }, [errors])

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  const navigate = useNavigate()

  useEffect(() => {
    if (auth.success){
      navigate('/login')
    }
  }, [auth.success, navigate ])

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(user));
    setIsSubmit(true);
    dispatch(registerUser(user));
  } 

  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handlePasswordEye = () => {
    setPasswordEye(!passwordEye)
  }

  const handleConfirmPasswordEye = () => {
    setConfirmPasswordEye(!confirmPasswordEye)
  }
  return (
    <div className='pt-[3rem]'>
      <div className='max-w-[800px] m-auto px-4 py-16'>
        <div className='bg-[#F5F5F5] dark:bg-[#0e0e10] px-10 py-8 rounded-lg'>
          <h1 className='text-2xl font-bold'>Create Account</h1>
          <form onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 md:gap-8'>
              <div className='my-4'>
                <label>First Name</label>
                <div className='my-2 w-full relative'>
                  <input 
                    className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'
                    type="text" 
                    placeholder='Enter First Name'
                    name='first_name'
                    value={user.first_name} 
                    onChange={handleChange} 
                  />
                </div>
              <p className='text-sm text-red-600'>{errors.first_name}</p>
              </div>

              <div className='my-2 md:my-4'>
                <label>Last Name</label>
                <div className='my-2 w-full relative'>
                  <input
                    className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                    type="text" 
                    placeholder='Enter Last Name' 
                    name='last_name'
                    value={user.last_name} 
                    onChange={handleChange}  
                  />
                </div>
              </div>
            </div>
            
            <div className='grid md:grid-cols-2 gap-2 md:gap-8'>
              <div className='my-4'>
                <label>Phone Number</label>
                <div className='my-2 w-full relative'>
                  <input
                    className='w-full p-2 border border-gray-400 bg-transparent rounded-lg'  
                    type="tel" 
                    placeholder='Enter Phone Number' 
                    name='phone'
                    value={user.phone} 
                    onChange={handleChange}  
                  />
                </div>
              </div>

              <div className='md:my-4'>
                <label>Email Address</label>
                <div className='my-2 w-full relative'>
                  <input
                    className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                    type="email" 
                    placeholder='Enter Email Address' 
                    name='email'
                    value={user.email} 
                    onChange={handleChange}  
                  />
                  <AiOutlineMail className='absolute right-2 top-3 text-gray-400'/>
                </div>
              <p className='text-sm text-red-600'>{errors.email}</p>
              </div>

            </div>
            
            <div className='grid md:grid-cols-2 gap-2 md:gap-8'>
              <div className='my-4'>
                <label>Password</label>
                <div className='my-2 w-full relative '>
                  <input
                    className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                    type={(passwordEye === false) ? 'password' : 'text'} 
                    placeholder='Enter Password'
                    name='password'
                    value={user.password} 
                    onChange={handleChange}  
                  />
                  <div className='absolute right-2 top-3'>
                    {(passwordEye === false) ? <AiFillEyeInvisible onClick={handlePasswordEye} className='text-gray-400'/> : <AiFillEye onClick={handlePasswordEye} className='text-gray-400'/>}
                  </div>
                </div>
              <p className='text-sm text-red-600'>{errors.password}</p>
              </div>


              <div className='md:my-4'>
                <label>Confirm Password</label>
                <div className='my-2 w-full relative'>
                  <input 
                    className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                    type={(confirmPasswordEye === false) ? 'password' : 'text'} 
                    placeholder='Confirm Password' 
                    name='password2'
                    value={user.password2} 
                    onChange={handleChange}  
                  />
                  <div className='absolute right-2 top-3'>
                    {(confirmPasswordEye === false) ? <AiFillEyeInvisible onClick={handleConfirmPasswordEye} className='text-gray-400'/> : <AiFillEye onClick={handleConfirmPasswordEye} className='text-gray-400'/>}
                  </div> 
                </div>
              <p className='text-sm text-red-600'>{errors.password2}</p>
              </div>

            </div>

            <p className='text-center text-sm py-1'>By signing up you accept our <span className='underline'>terms and conditions & privacy policy</span></p>
                                                                 
            
            <button className='w-full my-4 md:my-2 p-3 bg-button text-white rounded-lg'>{auth.registerStatus === 'pending' ? <ClipLoader size={20} /> : 'Create Account'}</button>
            {auth.registerStatus === 'rejected' ? <p className='text-sm text-red-600'>{auth.registerError}</p> : null}
          </form>
      
          <p className='my-4'>Already have an account? <Link className='text-[#986c55] underline' to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register