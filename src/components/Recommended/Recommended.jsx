import React, { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY, value_converter } from '../../Data';
import { Link } from 'react-router-dom';

const Recommended = ({categoryId}) => {

    const [apidata,setApidata]=useState([]);

    const fetchData=async()=>{
        const relatedvideo_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`

        await fetch(relatedvideo_url).then(res=>res.json()).then(data=>setApidata(data.items))
    }

    useEffect(()=>{
        fetchData() 
    },[])

  return (
    <div className='Recommended'>
{
 apidata.map((item,key)=>(
    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="side-video-list" key={key}>
    <img src={item.snippet.thumbnails.default.url} alt="" />
    <div className="vid-info">
        <h4>{item.snippet.title}</h4> 
        <p>{item.snippet.channelTitle}</p>
       <p>{value_converter(item.statistics.viewCount)}</p>
    </div>
</Link>
 ))

}



    </div>
  )
}

export default Recommended
