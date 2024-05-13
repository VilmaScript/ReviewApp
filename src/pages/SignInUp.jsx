import { useContext, useState } from "react"
import { useFormik } from 'formik';
import * as Yup from "yup"
import { signIn, signUp } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import MyContext from "../context/myContext";

function SignInUp (){
const [isSignUp, setIsSignUp]= useState(true)
const {updateUserId}  = useContext(MyContext)
const buttonClass = 'text-2xl font-medium '
const navigate = useNavigate()
const queryClient = useQueryClient();

const {mutate : signUpMutation} = useMutation({
  mutationFn : signUp,
  onSuccess : (data) => {
  console.log('success', data.user.id)
  updateUserId(data.user.id)
  },
})
const {mutate : signInMutation} = useMutation({
  mutationFn : signIn,
  onSuccess : (data) => {
  updateUserId(data.user.id)
  },
})
const formik = useFormik({
 initialValues: { 
   email: '',
   password: '',
  confirmPassword:'',
 },
 validationSchema: Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Invalid email address!"),
  password: Yup.string()
    .required("Password is required!")
    .min(6, "Password must be at least 6 characters!"),
    ...(isSignUp && {
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    }),
}), 
 onSubmit: (values) => {
  console.log(values)
  if(isSignUp){
    signUpMutation(values)
    navigate('/about-me')
  } else {
    signInMutation(values)
    navigate('/')
  }
}, })
 return <div className="bg-white h-screen">
  <div className="px-5 pt-5 flex flex-col">
  <button className={isSignUp ? `${buttonClass} text-gray-400 ` : `${buttonClass} text-purple-900`} onClick={()=>setIsSignUp(false)}>Sign In</button>
  <p className="m-auto mt-1 text-amber-500 font-thin">Or</p>
 <button className={!isSignUp ? `${buttonClass} text-gray-400` : `${buttonClass} text-purple-900`} onClick={()=>setIsSignUp(true)}>Sign Up</button>
  </div>

 <form onSubmit={formik.handleSubmit} className="py-5 px-5">
  <div className="py-3">
  <label htmlFor="email" className=" font-medium">Email</label>
  <input 
  type="email" 
  id="email" 
  name="email" 
  placeholder={isSignUp ? `Enter a valid email` : `Enter registered email`} 
  className="border-2 border-purple-200 rounded-full w-full px-2 py-1 mt-3"
  onChange={formik.handleChange}
  value={formik.values.email} />
  <p className="font-normal text-sm text-red-600">
    {formik.errors.email && formik.touched && formik.errors.email}
  </p>
  </div>
   
  <div className="py-3">
  <label htmlFor="password" className="font-medium">Password</label>
  <input 
  type="text" 
  id="password" 
  name="password" 
  placeholder={isSignUp ? `Enter a strong password` : `Enter your password`} 
  className="border-2 border-purple-200 rounded-full w-full px-2 py-1 mt-3"
  onChange={formik.handleChange}
  value={formik.values.password}/>
  <p className="font-normal text-sm text-red-600">
    {formik.errors.password && formik.touched && formik.errors.password}
  </p>
  </div>

  {isSignUp ? <div className="py-3">
  <label htmlFor="confirm-password "className="font-medium">Confirm Password</label>
  <input 
  type="text" 
  id="confirmPassword" 
  name="confirmPassword" 
  placeholder="confirm password" 
  className="border-2 border-purple-200 rounded-full w-full px-2 py-1 mt-3"
  onChange={formik.handleChange}
  value={formik.values.confirmPassword} />
  <p className="font-normal text-sm text-red-600">
    {formik.errors.confirmPassword && formik.touched && formik.errors.confirmPassword}
  </p>
  </div> : '' }
  
  <button type="submit" className="bg-violet-900 w-full text-white px-3 py-1.5 rounded-full mt-5">{isSignUp ? `Sign Up` : `Sign In` }</button>
 </form>
 </div>
}

export default SignInUp
