import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'> 
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form className='flex flex-col items-center justify-center'>
                <input className='  outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your email' />
                <input className='  outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-5 placeholder:text-gray-500' type="password"placeholder='Enter Your Password' />
                <button className='mt-5 text-white border-none outline-none  border-2 bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white'>log in</button>
            </form>

         </div>
 
    </div>
  )
}

export default Login
