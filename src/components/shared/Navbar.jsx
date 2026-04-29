import Link from "next/link";
import User from "@/assets/user.png"
import Image from "next/image";
import NavLink from "./NavLink";
const Navbar = () => {
    return (
        <div className="flex justify-between items-center my-5">
            <div></div>
           <ul className="flex gap-3 text-gray-500">
            <li><NavLink href="/">Home</NavLink></li>
             <li><NavLink href="/about">About</NavLink></li>
              <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            <div className="flex gap-2 items-center">
                <Image src={User} width={40} height={40} alt="usericon"></Image>
                <button className="btn btn-primary"><Link href="/login">log in</Link></button>
            </div>
        </div>
    );
};

export default Navbar;