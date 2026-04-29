import { getNewsFullDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight ,FaArrowLeft } from "react-icons/fa";


export const generateMetadata=async({params})=>{
    const {id}= await params
    console.log(params,"params")
    const news= await getNewsFullDetailsById(id);
    return {
    title: news.title,
    
  }
}
const NewsDetailspage = async({params}) => {
    const {id}=  await params
   
    const news= await getNewsFullDetailsById(id);
    console.log(news,"news")
     if (!news) {
    return <p className="text-center mt-10">News not found</p>;
  }

    return (

         <div className='flex flex-col p-3 shadow-sm'>
                  
        <div className="card bg-base-100 ">
            <Link href="/" className="badge badge-error text-white"> <FaArrowLeft  />Go back </Link>
          <div className="card-body">
            <h2 className="card-title">{news.title}</h2>
             <figure>
            <Image
              src={news.image_url} width={600} height={500}
              alt="S" />
          </figure>
            <p >{news.details}</p>
           <Link href={`/category/${news.category_id}`} className="btn bg-red-500 p-3">See All news in this category <FaArrowRight /></Link>
          </div>
         
        </div>
       
                </div>
    );
};

export default NewsDetailspage;