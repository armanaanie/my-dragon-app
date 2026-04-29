

"use client"


import Link from "next/link";
import { useForm } from "react-hook-form";

 


const RegisterPage = () => {
const {
    register,
    handleSubmit, 
    formState: { errors }
    
  } = useForm()
   
    const handleRegisterFunc=(data)=>{
       console.log(data,"data")
    }
    return (
        <div>
            
             <div className="card bg-base-100  w-1/2 lg:w-1/3 mx-auto shadow-2xl space-y-3 p-4">
             <h1 className='font-bold  text-center border-b py-5'>Register yourself</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegisterFunc)}>
            <fieldset className="fieldset ">
                <label className="label font-semibold">Name</label>
          <input type="text" className="input w-full" placeholder="Name" {...register("text",{ required: true })}/>
          {errors.text && <p className="text-red-400">Name must be fill in!</p>}
          <label className="label font-semibold">Photo URL</label>
          <input type="text" className="input w-full" placeholder="Type here Photo url" {...register("photo",{ required: true })}/>
          {errors.photo && <p className="text-red-400">Put your URL</p>}
          <label className="label font-semibold">Email</label>
          <input type="email" className="input w-full" placeholder="Email" {...register("email",{ required: true })}/>
          {errors.email && <p className="text-red-400">Email must be fill in!</p>}
          <label className="label font-semibold">Password</label>
          <input type="password" className="input w-full" placeholder="Password" name="password" {...register("password",{ required: true })}/>
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