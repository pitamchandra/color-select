import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const {signUp,setUser} = useContext(AuthContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmError, setConfirmError] = useState('')
  
  const path = location?.state?.pathname || '/';
  

  const handleSubmit= event =>{
    event.preventDefault()
    const form = event.target;
    if(emailError){
      form.email.focus()
      return;
    }
    else if(passwordError){
      form.password.focus()
      return;
    }
    else if(confirmError){
      form.confirm.focus()
      return;
    }
    signUp(email, password).then(result =>{
      const loggedUser = result.user;
      setUser(loggedUser);
      navigate(path)
    })
    .catch(error => {
      toast(error.message)
    })


  }

  const handleName =(event) =>{
    const nameInput = event.target.value;
    setName(nameInput)
  }

  const handleEmail = event =>{
    const emailInput = event.target.value;
    setEmail(emailInput)
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
      setEmailError('please type a valid email')
    }else{
      setEmailError('')
    }
  }

  const handlePassword = event =>{
    const passwordInput = event.target.value;
    
    setPassword(passwordInput)
    if(password.length < 6){
      setPasswordError('password must be at least 6 characters')
    }
    else if(!/.+[A-Z]+./.test(passwordInput)){
      setPasswordError('password must be at least one capital letter')
    }
    else{
      setPasswordError('')
    }
  }

  const handleConfirm =(event)=>{
    const confirmInput = event.target.value;
    setConfirm(confirmInput)
    if(password === confirm){
      setConfirmError('')
    }else{
      setConfirmError('confirm password is not same!')
    }
  }

  return (
    <div className="flex items-center h-[calc(100vh-60px)]">
      <form onSubmit={handleSubmit} className="mt-8 border-2 shadow shadow-violet-500 border-sky-500 p-4 rounded">
        <h3 className="text-xl text-sky-600 font-semibold mb-3">Please Register</h3>
        <div className="relative z-0 w-full mb-4 group">
          <input type="text" name="name" id="name" value={name} onChange={handleName} className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  text-gray-900  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer ${name ? 'border-green-500 text-green-500' : 'border-gray-300 focus:border-blue-600'}`} placeholder=" " required />
          <label htmlFor="name" className="peer-focus:font-medium bg-transparent absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
          
        </div>
        <div className="relative z-0 w-full mb-4 group">
          <input type="text" name="email" id="email" value={email} onChange={handleEmail} className={`block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer ${email ? emailError ? 'border-red-500 text-red-400' : 'border-green-500 text-green-500' : 'border-gray-300 text-gray-900 focus:border-blue-600'}`} placeholder=" " required />
          <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
          {
            emailError && <span className="error">{emailError}</span>
          }
        </div>
        <div className="relative z-0 w-full mb-4 group">
          <input type="password" name="password" id="password" value={password} onChange={handlePassword} className={`block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer ${password ? passwordError ? 'border-red-500 text-red-400' : 'border-green-500 text-green-500' : 'border-gray-300 text-gray-900 focus:border-blue-600'}`} placeholder=" " required />
          <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
          {
            passwordError && <span className="error">{passwordError}</span>
          }
        </div>
        <div className="relative z-0 w-full mb-4 group">
          <input type="password" name="confirm" id="confirm" value={confirm} onChange={handleConfirm} className={`block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  peer ${confirm ? confirmError ? 'border-red-500 text-red-400' : 'border-green-500 text-green-500' : 'border-gray-300 text-gray-900 focus:border-blue-600'}`} placeholder=" " required />
          <label htmlFor="confirm" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
          {
            confirmError && <span className="error">{confirmError}</span>
          }
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
          </div>
          <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-sky-500 hover:underline hover:text-sky-400">terms and conditions</a></label>
        </div>
        <input type="submit" value="Register" className="py-2 mb-3 px-4 bg-sky-500 text-white duration-500 cursor-pointer rounded hover:bg-violet-600" />
        <p>Already have an account? <Link to='/login' className="text-sky-500 hover:text-sky-400">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
