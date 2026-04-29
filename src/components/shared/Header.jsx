import Image from "next/image";
import logo from "@/assets/logo.png"
import {format } from "date-fns";
const Header = () => {
    return (
        <div className="text-center p-3 flex- flex-col gap-3">
           
           <Image src={logo} width={300} height={200} className="mx-auto" alt="logo"></Image>
           <p>Journalism Without Fear or Favour</p>
           <p> <span className="font-semibold">{format(new Date(),"EEEE")}</span>,{format(new Date(), "MMM dd,yyyy")}</p>
        </div>
    );
};

export default Header;