import React from 'react';
import Marquee from 'react-fast-marquee';
const News=[
  {
    "id": 1,
    "title": " Major political update announced today"
  },
  {
    "id": 2,
    "title": "Stock market shows sudden rise in tech sector"
  },
  {
    "id": 3,
    "title": "Heavy rainfall alert issued in coastal regions"
  },
  {
    "id": 4,
    "title": "New technology trends shaping the future of AI"
  },
  {
    "id": 5,
    "title": "International summit focuses on climate change"
  }
]
const BreakingNews = () => {
    return (
        <div className='flex gap-4 justify-between items-center bg-gray-200'>
            <button className='btn bg-red-500 text-white'>Latest News</button>
          <Marquee pauseOnHover={true}>{News.map((news)=><span key={news.id} className="mr-20 font-medium">{news.title}</span>)}</Marquee>  
        </div>
    );
};

export default BreakingNews;