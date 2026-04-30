"use client"


import { authClient } from "@/lib/auth-client";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";

 


const RegisterPage = () => {
const {
    register,
    handleSubmit, 
    formState: { errors }
    
  } = useForm()
   const [isShowPassword,setIsShowPassword]=useState(false)   
    const handleRegisterFunc= async (data)=>{
   
const {email,name,password}=data;
       const {data:res,error } = await authClient.signUp.email({
    name: name, 
    email: email, 
    password: password, 
    callbackURL: "/home",
});
console.log(res,"res");
console.log(error,"error")
    }
    return (
        <div>
            
             <div className="card bg-base-100  w-1/2 lg:w-1/3 mx-auto shadow-2xl space-y-3 p-4">
             <h1 className='font-bold  text-center border-b py-5'>Register yourself</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegisterFunc)}>
            <fieldset className="fieldset ">
                <label className="label font-semibold">Name</label>
          <input type="text" className="input w-full" placeholder="Name" {...register("name",{ required: true })}/>
          {errors.name && <p className="text-red-400">Name must be fill in!</p>}
          <label className="label font-semibold">Photo URL</label>
          <input type="text" className="input w-full" placeholder="Type here Photo url"/>
          <label className="label font-semibold">Email</label>
          <input type="email" className="input w-full" placeholder="Email" {...register("email",{ required: true })}/>
          {errors.email && <p className="text-red-400">Email must be fill in!</p>}
          <label className="label font-semibold">Password</label>
         <input type={isShowPassword?"text":"password"} className="input w-full " placeholder="Password" name="password" {...register("password",{ required: true })}/>
                   <span className="relative" onClick={()=>setIsShowPassword(!isShowPassword)}>{isShowPassword?<FaEyeSlash className="absolute right-5 top-[-30] " />:<LuEyeClosed className="absolute right-5 top-[-30] " />}</span>
          {errors.password && <p className="text-red-400">Password must be fill in!</p>}
          
         <input
  className="btn btn-neutral mt-4"
  type="submit"
  value="Register"
/>
        </fieldset></form>
        
      </div>
      
    </div>
        </div>
    );
};

export default RegisterPage;