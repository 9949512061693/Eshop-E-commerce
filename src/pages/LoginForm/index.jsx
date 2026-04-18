import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { LoginContext } from '../../Context/LoginContext';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submited, setSubmited] = useState(false)
  const { islogin, toggleLogin } = useContext(LoginContext);
  const [errmsg, setErrorMsg] = useState('');
  const navigate = useNavigate();


  const onSubmitEventclick = (event) => {
    event.preventDefault();

    if (username === '') {
      setErrorMsg('Pease Enter Username!');
    } else if (password === "") {
      setErrorMsg("Please Enter Password!");
    }

    setSubmited(true)
    if (username === '' && password === "") {
      setErrorMsg("Please Enter Username and Password!");
      return
    }


    toggleLogin();
  }

  if (username !== '' && password !== '' && islogin) {
    return <Navigate to="/" />;
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form className='bg-white dark:bg-gray-500 p-8 rounded-2xl shadow-md  md:w-[400px]' onSubmit={onSubmitEventclick}>

        <h1 className='text-primary block mx-auto w-fit font-semibold tracking-widest text-2xl uppercase sm:text-3xl mb-3'>
          Eshop
        </h1>

        <p className='text-gray-500 dark:text-white/90 fond-md font-semibold text-center'>Welcome Back 👋</p>
        <div className='flex flex-col mb-4'>
          <label htmlFor='usernameID' className='mb-1 text-md md:text-xl  text-sm font-medium font-semibold'>
            Username
          </label>
          <input
            type='text'
            id="usernameID"
            placeholder='Enter Name'
            value={username}
            onChange={(event) => {
              setUsername(event.target.value)
            }}
            className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>

        <div className='flex flex-col mb-6'>
          <label htmlFor='passwordId' className='mb-1 text-md md:text-xl font-medium font-semibold'>
            Password
          </label>
          <input
            type='password'
            id="passwordId"
            placeholder='Enter Password'
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
        </div>

        <button type="submit" className='block mx-auto w-[110px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition'>
          Submit
        </button>
        {(submited && (username === '' || password === '')) && (
          <p className='text-red-500 text-sm text-center font-semibold m-1'>{errmsg}
          </p>
        )}
        <p className='text-gray-400 font-semibold text-center '>Already have an account?
          <span
            onClick={() => navigate('/signUp')}
            className='text-blue-500 hover:text-blue-900 font-bold cursor-pointer underline'
          >
            Sign Up
          </span></p>
      </form>
    </div>
  )
}

export default LoginForm