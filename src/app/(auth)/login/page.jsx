"use client"


import Link from "next/link";
import { useForm } from "react-hook-form";

 


const LoginPage = () => {
const {
    register,
    handleSubmit, 
    formState: { errors }
    
  } = useForm()
   
    const handleLogInFunc=(data)=>{
       console.log(data,"data")
    }
    return (
        <div>
            
             <div className="card bg-base-100  w-1/2 lg:w-1/3 mx-auto shadow-2xl space-y-3 p-4">
             <h1 className='font-bold  text-center border-b py-5'>Login yourself</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit(handleLogInFunc)}>
            <fieldset className="fieldset ">
          <label className="label font-semibold">Email</label>
          <input type="email" className="input w-full" placeholder="Email" {...register("email",{ required: true })}/>
          {errors.email && <p className="text-red-400">Email must be fill in!</p>}
          <label className="label font-semibold">Password</label>
          <input type="password" className="input w-full" placeholder="Password" name="password" {...register("password",{ required: true })}/>
          {errors.password && <p className="text-red-400">Password must be fill in!</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
         <input
  className="btn btn-neutral mt-4"
  type="submit"
  value="Login"
/>
        </fieldset></form>
        
      </div>
      <p className="text-center text-[12px]">Don't Have a account? <Link href="/Register" className="text-red-400 font-semibold">Register</Link></p>
    </div>
        </div>
    );
};

export default LoginPage;