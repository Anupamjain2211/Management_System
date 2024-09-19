import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='bg-slate-300 min-h-screen flex justify-center items-center'>
      <form className='p-8 bg-white shadow-md rounded-lg w-[30%]'>
        <h1 className='text-4xl mb-10 font-bold underline'>Signup Here</h1>

        <div className='mb-4'>
          <label className='block text-xl mb-2' htmlFor="user">User Name</label>
          <input
            className='w-full p-2 border border-gray-300 rounded-md'
            type="text"
            name='user'
            id='user'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-xl mb-2' htmlFor="email">Email</label>
          <input
            className='w-full p-2 border border-gray-300 rounded-md'
            type="email"
            name='email'
            id='email'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-xl mb-2' htmlFor="pass">Password</label>
          <input
            className='w-full p-2 border border-gray-300 rounded-md'
            type="password"
            name='pass'
            id='pass'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-xl mb-2' htmlFor="pass">Confirm Password</label>
          <input
            className='w-full p-2 border border-gray-300 rounded-md'
            type="password"
            name='pass'
            id='pass'
            required
          />
        </div>

        <div className='text-center'>
          <button className='bg-slate-600 p-3 w-full mt-5 rounded-lg text-xl font-bold text-white hover:bg-slate-700' type='submit'>
            Signup
          </button>
          <div>
            <div className='mt-8'>
                <p className='text-xl'>Alredy have an account <Link to="/login"> <span className='font-bold underline'>Login Here!</span></Link> </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
