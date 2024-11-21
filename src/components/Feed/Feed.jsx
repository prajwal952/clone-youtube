import React, { useEffect, useState } from 'react';
import './Feed.css';
// import thumbnail1 from '../../assets/thumbnail1.png';
// import thumbnail2 from '../../assets/thumbnail2.png';
// import thumbnail3 from '../../assets/thumbnail3.png';
// import thumbnail4 from '../../assets/thumbnail4.png';
// import thumbnail5 from '../../assets/thumbnail5.png';
// import thumbnail6 from '../../assets/thumbnail6.png';
// import thumbnail7 from '../../assets/thumbnail7.png';
// import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';
import { API_KEY, daysAgo, value_converter } from '../../Data';
import moment from 'moment';

const Feed = ({category}) => {


    const [data,setData]=useState([])

const fetchData= async ()=>{

    const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`

    await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items));
    
// try {
//     const response = await fetch(videoList_url);
//     const data = await response.json();
//     setData(data.items);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
    


}

useEffect(()=>{
    fetchData()
},[category])

  return (

    <>
    { data?
  
    <div className='feed'>

        {data.map((item,index)=>{
            return(
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card' key={index}>
                <img src={item.snippet.thumbnails.default.url} alt="thumbnail1" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                {/* <p>{value_converter(item.statistics.viewCount)} views &bull; {daysAgo(item.snippet.publishedAt)} days ago</p> */}
              </Link>
              
            )
        })}

  


    </div>
    :''
}
    </>
  );
}

export default Feed;
