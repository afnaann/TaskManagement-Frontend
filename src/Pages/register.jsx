import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Register = () => {

    const [formData, setFormData] = useState({
        
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      });
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
    });

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    if(formData.password != formData.passwordConfirmation){
        setErrors({
          ...errors,
          passwordConfirmation:'Passwords Does not Match!'
        })
    }
    else{
        try{
            const response = await axios.post('http://localhost:8000/auth/register/',formData);
            console.log(response)
    
            if(response.status === 201){
                console.log('great')
            }
        }
        catch(error){
            if(error.response && error.response.data){
                const backendErrors = error.response.data
                setErrors({
                    username:backendErrors.username ||'',
                    email:backendErrors.email ||'',
                    password:backendErrors.password ||'',
                })
            } else {
                console.error('there was Unexpected Error',error)
            }
        }
    }


  }
  const handleChange = (e) => {
    const {name, value } = e.target
    setFormData({
        ...formData,
        [name]:value,
    })
    setErrors({
        ...errors,
        [name]:''
    })
  }
  

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Create a new account
        </h2>
     
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form method="POST" onSubmit={handleSubmit}>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Username
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="username"
                  name="username"
                  placeholder="John Doe"
                  type="text"
                  required
                  value={formData.username || ''}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}

            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  required
                  value={formData.email || ''}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

            </div>

            {/* Password Input */}
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password || ''}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

            </div>

            {/* Confirm Password Input */}
            <div className="mt-6">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Confirm Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password_confirmation"
                  name="passwordConfirmation"
                  type="password"
                  required
                  value={formData.passwordConfirmation || ''}
                  onChange={handleChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
              {errors.passwordConfirmation && <p style={{ color: 'red' }}>{errors.passwordConfirmation}</p>}

            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Create account
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
