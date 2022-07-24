import React from 'react'
import {AiOutlineMail, AiFillEyeInvisible, AiFillEye, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../slices/authSlice'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify';


const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  console.log(auth);

  const navigate = useNavigate()

  useEffect(() => {
    if (auth._id && auth.first_name){
      navigate('/')
      toast.warning(`Welcome, ${auth.first_name}`, {position: 'bottom-left'})
    }
  }, [auth._id, auth.first_name, navigate])

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(loginUser(user))
  } 

  const [passwordEye, setPasswordEye] = useState(false);
  
  const handlePasswordEye = () => {
    setPasswordEye(!passwordEye)
  }
  return (
    <div className='pt-[3rem]'>
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
        <div className='bg-[#F5F5F5] dark:bg-[#0e0e10] px-10 py-8 rounded-lg relative'>
          <h1 className='text-2xl font-bold'>Log In</h1>
          <form onSubmit={handleSubmit}>
            <div className='my-4'>
              <label>Email Address</label>
              <div className='my-2 w-full relative'>
                <input 
                  className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                  type="email" 
                  placeholder='Enter Your Email Address'
                  required
                  onChange={(e) => setUser({...user, email: e.target.value})}
                  />
                <AiOutlineMail className='absolute right-2 top-3 text-gray-400'/>
              </div>
            </div>

            <div className='my-4'>
              <label>Password</label>
              <div className='my-2 w-full relative'>
                <input 
                  className='w-full p-2 border border-gray-400 bg-transparent rounded-lg' 
                  type={(passwordEye === false) ? 'password' : 'text'} 
                  placeholder='Enter Your Password'
                  required
                  onChange={(e) => setUser({...user, password: e.target.value})}

                />
                <div className='absolute right-2 top-3'>
                    {(passwordEye === false) ? <AiFillEyeInvisible onClick={handlePasswordEye} className='text-gray-400'/> : <AiFillEye onClick={handlePasswordEye} className='text-gray-400'/>}
                </div>
              </div>
            </div>

            <div className='py-1 text-sm flex items-center justify-between'>
              <p><input className='mr-2' type="checkbox" />Remember Me</p>
              <p className='cursor-pointer'>forgot password?</p>
            </div>

            <button className='w-full my-2 p-3 bg-button rounded-lg text-white'>
              {auth.loginStatus === 'pending' ? <ClipLoader size={20} /> : 'Login'}
            </button>
            {auth.loginStatus === 'rejected' ? <p className='text-sm text-red-600'>{auth.loginError}</p> : null}
          </form>
          <p className='my-4'>Don't have an account? <Link className='text-[#986c55]' to='/register'>Create Account</Link></p>
          <div className='absolute right-4 top-4'>
            <Link to='/'>
              <AiOutlineClose size={22}/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login