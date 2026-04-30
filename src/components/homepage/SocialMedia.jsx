"use client"
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import swiming from "@/assets/swimming.png";
import classroom from "@/assets/class.png"
import playground from "@/assets/playground.png";
import bg from "@/assets/bg.png"
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
const SocialMedia = () => {
    const handleGoogleSignIn=async()=>{
const data = await authClient.signIn.social({
    provider: "google",
  });
console.log(data,"data")}
  const handleGitHubSignIn=async()=>{
const data = await authClient.signIn.social({
    provider: "github",
  });
  console.log(data,"data")
    }
    return (
        <div className="flex flex-col gap-3 p-2">
            <h1 className="font-semibold text-2xl">Login With</h1>
            <div className="flex flex-col gap-2"><button onClick={handleGoogleSignIn}className="btn btn-outline border-blue-700 text-blue-700"><FaGoogle /> Login with Google</button><button onClick={handleGitHubSignIn} className="btn btn-outline border-black"><FaGithub /> Login with GitHub</button></div>
            <div><h1 className="my-4 font-semibold text-2xl">Find Us On</h1><div className="border border-gray-300"><span className="flex items-center pl-5 gap-2 text-blue-500 border-b border-b-gray-300 p-2"><FaFacebook/> Facebook</span><span className="flex items-center pl-5 gap-2 text-blue-500 border-b border-b-gray-300 p-2"><FaTwitter/> Twitter</span><span className="flex items-center pl-5 gap-2 text-blue-500 p-2"><FaInstagram/> Instagram</span></div></div>
            <div className="flex flex-col gap-4 bg-gray-200 my-5"><h1 className="font-semibold text-2xl mt-3 mx-2">Q-Zone</h1><Image src={swiming} width={500} height={500} alt="swiming baby"></Image><Image src={classroom} width={500} height={500} alt="swiming baby"></Image><Image src={playground} width={500} height={500} alt="swiming baby"></Image></div>
            <Image src={bg} alt="bg-demo"></Image>
        </div>
    );
};

export default SocialMedia;