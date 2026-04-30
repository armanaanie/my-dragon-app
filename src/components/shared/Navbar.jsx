"use client"

import Link from "next/link";
import User from "@/assets/user.png"
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient, useSession } from "@/lib/auth-client"


const Navbar = () => {
    const { data: session ,isPending} = authClient.useSession();
    const user= session?.user;
    console.log(user,"user",isPending)
    console.log(session,"session")
    return (
        <div className="flex justify-between items-center my-5">
            <div></div>
           <ul className="flex gap-3 text-gray-500">
            <li><NavLink href="/">Homeishome</NavLink></li>
             <li><NavLink href="/about">About</NavLink></li>
              <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            {isPending ?(<p>Loading...</p>):user?(<div className="flex gap-2 items-center">
                <h1>Hello,{user.name}!</h1>
                <Image src={user.image || User} width={40} height={40} alt="usericon"></Image>
                <button className="btn btn-primary" onClick={async()=>await authClient.signOut()}>log out</button>
            </div>) :  <button className="btn btn-primary"><Link href="/login">log in</Link></button> }
            
            
        </div>
    );
};

export default Navbar;