import {  format } from "date-fns";

import Image from 'next/image';
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
const NewsCard = ({n}) => {
    return (
        <div className='flex flex-col p-3 shadow-sm'>
           <div className=" flex justify-baseline gap-5 bg-base-200 shadow-sm p-3">
 <Image src={n.author.img}  width={50} height={50} alt='demo-user'  className="rounded-full"></Image>
  <div className="">
    <h2 className="card-title">{n.author.name}</h2>
    <p>{format(new Date(n.author.published_date), "yyyy-MM-dd")}</p>
    
  </div>

</div>
<div className="card bg-base-100 ">
  <div className="card-body">
    <h2 className="card-title">{n.title}</h2>
     <figure>
    <Image
      src={n.image_url} width={600} height={500}
      alt="Shoes" />
  </figure>
    <p className="line-clamp-3">{n.details}</p>
    <Link className="btn btn-primary w-35" href={`/news/${n._id}`}>See Details</Link>
  </div>
 
</div>
<div className="flex border-t justify-between p-3"><div className="flex"><div className="rating">
  <input type="radio" name="rating-1" className="mask mask-star" aria-label="1 star" />
  <input type="radio" name="rating-1" className="mask mask-star" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-1" className="mask mask-star" aria-label="3 star" />
  <input type="radio" name="rating-1" className="mask mask-star" aria-label="4 star" />
  <input type="radio" name="rating-1" className="mask mask-star" aria-label="5 star" />
</div><p>{n.rating.number}</p></div> <span className="flex gap-2 justify-center items-center"><FaRegEye /> {n.total_view}</span></div>
        </div>
    );
};

export default NewsCard;