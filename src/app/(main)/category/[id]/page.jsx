import NewsCategory from '@/components/homepage/NewsCategory';
import SocialMedia from '@/components/homepage/SocialMedia';
import React from 'react';
async function getCategories(){
  const res= await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data= await res.json();
  
  return data.data
}
async function getNewsDetailsById(category_id){
  const res= await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data= await res.json();
  
  return data.data
}
const NewsCategoryPage = async({params}) => { const {id}= await params;
    console.log(id,"paramres")
     const categories= await getCategories();
  const news= await getNewsDetailsById(id);
    return (
       <div className="grid grid-cols-12">{categories.length}<div className="bg-blue-50 col-span-3"><h1 className="font-bold text-2xl my-2">All Categories</h1><NewsCategory categories={categories} activeId={id}/></div><div className="bg-pink-50 col-span-6 border">2ndCol<div className="flex flex-col gap-3 p-3"> {
    news.length>0? news.map((n,index)=>{
      return <div key={index}>{n.title}</div>
    }):<h2>No news found</h2>
   }</div>
  
   </div>
   <div className="bg-blue-50 col-span-3"><SocialMedia/></div></div>
    );
};

export default NewsCategoryPage;