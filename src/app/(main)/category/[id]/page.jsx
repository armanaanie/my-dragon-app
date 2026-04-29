import NewsCard from '@/components/homepage/NewsCard';
import NewsCategory from '@/components/homepage/NewsCategory';
import SocialMedia from '@/components/homepage/SocialMedia';
import { getCategories, getNewsDetailsById } from '@/lib/data';


const NewsCategoryPage = async({params}) => { const {id}= await params;
    console.log(id,"paramres")
     const categories= await getCategories();
  const news= await getNewsDetailsById(id);
    return (
       <div className="grid grid-cols-12">{categories.length}<div className=" col-span-3"><h1 className="font-bold text-2xl my-2">All Categories</h1><NewsCategory categories={categories} activeId={id}/></div><div className=" col-span-6 "><h1 className="font-bold text-2xl my-2">News by Category</h1><div className="flex flex-col gap-3 p-3"> {
    news.length>0? news.map((n,index)=>{
      return <NewsCard key={index} n={n}></NewsCard>
    }):<h2>No news found</h2>
   }</div>
  
   </div>
   <div className="col-span-3"><SocialMedia/></div></div>
    );
};

export default NewsCategoryPage;