import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { LoginContext } from '../../Context/LoginContext';

function SignForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [submited, setSubmited] = useState(false)
    //const { islogin, toggleLogin } = useContext(LoginContext);
    const [errmsg, setErrorMsg] = useState('');
    const navigate = useNavigate();


    const onSubmitEventclick = (event) => {
        event.preventDefault();
        setSubmited(true)

        if (username === '') {
            setErrorMsg('Pease Enter Username!');
            return;
        }
        if (password === "") {
            setErrorMsg("Please Enter Password!");
            return;
        }
        if (email === '') {
            setErrorMsg('Please Enter Email Id');
            return;
        }

        setSubmited(true)
        if (username === '' && password === "" && email === '') {
            setErrorMsg("Please Enter Username, Email and Password!");
            return
        }

        setErrorMsg('')
        //toggleLogin();
    }

    if (submited && username !== '' && password !== '' && email !== '') {
        return <Navigate to="/login" />;
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <form className='bg-white p-8 rounded-2xl shadow-md dark:bg-gray-500 md:w-[400px]' onSubmit={onSubmitEventclick}>

                <h1 className='text-primary block mx-auto w-fit font-semibold tracking-widest text-2xl uppercase sm:text-3xl mb-3'>
                    Eshop
                </h1>

                <p className='text-gray-500 dark:text-white/90 text-center font-semibold mb-2'>Create your account 👋</p>

                {/* Username Section */}

                <div className='flex flex-col mb-4'>
                    <label htmlFor='usernameID' className='mb-1 text-md md:text-xl  dark:text-white text-sm font-medium font-semibold'>
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

                {/*Email Section*/}

                <div className='flex flex-col mb-6'>
                    <label htmlFor='emailId' className='mb-1 text-md md:text-xl font-medium font-semibold'>
                        Email ID
                    </label>
                    <input
                        type='email'
                        id="emailId"
                        placeholder='Enter Valid Email'
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value)
                        }}
                        className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    />
                </div>

                {/*Password Section*/}

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

                <button type="submit" className='block mx-auto w-[110px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-900 transition'>
                    Register
                </button>
                {(submited && (username === '' || password === '' || email === '')) && (
                    <p className='text-red-500 text-sm font-semibold text-center m-1'>{errmsg}
                    </p>
                )}
                <p className='text-gray-400 font-semibold text-center'>Already have an account? <span className='text-blue-500 text-lg hover:text-blue-900 underline cursor-pointer font-bold' onClick={() => {
                    navigate('/login')
                }}>Login</span></p>
            </form>
        </div>
    )
}

export default SignForm