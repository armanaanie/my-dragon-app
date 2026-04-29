import Link from "next/link";


const NewsCategory = ({categories,activeId}) => {
    return (<div><ul className="flex flex-col gap-3 mx-2 lg:mx-10 ">{
    categories.news_category.map((c,index)=><li key={index}><Link href={`/category/${c.category_id}`} className={`block p-2 rounded ${
            activeId === c.category_id
              ? "bg-slate-500 text-white"
              : "hover:bg-gray-200"
          }`}>{c.category_name} </Link>
    <Link href={`/category/${c.category_id}`}></Link></li>)
    }</ul></div>
        
    );
};

export default NewsCategory;