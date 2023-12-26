import axios from 'axios';
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'


const Login = () => {
   const [user, setUser]=useState({
    email:'',
    password:''
   });

    const handleUser=(e)=>{
     const {name, value}= e.target;
      setUser((user) =>({
        ...user,
        [name]:value,
      }));
        
    }
   

  const handleLogin= async (e)=>{
    e.preventDefault();
      const {email, password}=user

      if (email && password) {
        try {
            const res = await axios.post('http://localhost:5000/api/user/login',user)
            alert(res.data.message);
            console.log(res.data)
          } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration failed. Please try again.');
          }
          
        alert(res.data.message)
      } else {
        alert('something went wrong')
      }

   } 


  return (
    <div>
       
      <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
      <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
      Flowbite
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
         Login to your account
        </h1>
        <form className="space-y-4 md:space-y-6" method='POST' onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              onChange={handleUser}
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleUser}
            />
          </div>


          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            login account
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            for registration  <NavLink to="/registration" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</NavLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Login
