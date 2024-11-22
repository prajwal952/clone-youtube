import React, { useEffect, useState } from 'react'
import './Playvideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY, value_converter } from '../../Data';
import moment from 'moment';
import { useParams } from 'react-router-dom';



const PlayVideo = () => {

    const {videoId} =useParams()

    // console.log('videoId is ',videoId)

const [apidata,setApidata]=useState(null);
const [channeldata,setChannelData]= useState(null);
const [commentdata,setCommentData]=useState([]);

const fetchVideoData= async()=>{
    console.log('func call')
    //fatching vidoes data
    const videoDeatils_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
     const data = await fetch(videoDeatils_url);
     console.log('data is',data)
     const parseData= await data.json();
    //  console.log('data is parse',parseData.items[0])
     setApidata(parseData.items[0])
      //  await fetch(videoDeatils_url).then(res=>res.json()).then(data=>setApidata(data.items[0]))
}

const fetchOtherData= async () => {
 const otherDataUrl=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata? apidata.snippet.channelId :'UCjmJDM5pRKbUlVIzDYYWb6g'}&key=${API_KEY}`

    await fetch(otherDataUrl).then(data=>data.json()).then(response=>setChannelData(response.items[0]))

    console.log('other data is',channeldata)

    const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`

    await fetch(comment_url).then(res=>res.json()).then(data=>setCommentData(data.items))

    
}



//     const videoDeatils_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    
//     try {
//         // Fetch data from YouTube API
//         const response = await fetch(videoDeatils_url);

//         // Check if the response is successful
//         if (!response.ok) {
//             console.error("Failed to fetch data", response.status, response.statusText);
//             return;
//         }

//         // Parse the JSON response
//         const data = await response.json();

//         // Log the full data to inspect the structure
//         console.log("Fetched Data:", data);

//         // Check if items array exists and has data
//         if (data.items && data.items.length > 0) {
//             setApidata(data.items[0]);  // Set the first item in the state
//         } else {
//             console.error("No video data found.");
//         }
//     } catch (error) {
//         console.error("Error fetching video data:", error);
//     }
// };

// useEffect(()=>{
//     fetchVideoData()
//     fetchOtherData()
// },[apidata,channeldata])

useEffect(()=>{
    fetchVideoData()
    
},[videoId])

useEffect(()=>{
     fetchOtherData()
},[apidata])


  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}

        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1` } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>

{apidata &&
<>

 <h3>{apidata.snippet.title}</h3>

 
 <div className='Play-video-info'>
            <p>{ value_converter(apidata.statistics.viewCount)} views &bull; { moment(apidata.snippet.publishedAt).fromNow()}</p>
            <div>
                <span>
                    <img src={like} alt="" /> { value_converter(apidata.statistics.likeCount)}
                </span>
                <span>
                    <img src={dislike} alt="" /> 25
                </span>
                <span>
                    <img src={share} alt="" /> share
                </span>
                <span>
                    <img src={save} alt="" /> save
                </span>
            </div>
        </div>
</>      


}
       
       

        <hr />

        <div className="publisher">
            <img src={channeldata ? channeldata.snippet.thumbnails.medium.url :jack} alt="" />
            {console.log("channel data is 2 ",channeldata)}
            <div>
                <p>{apidata? apidata.snippet.channelTitle:"Channel Title"}</p>
                <span>{channeldata? value_converter(channeldata.statistics.subscriberCount) : "1M"} Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='vid-description'>
            <p>{apidata? apidata.snippet.description.slice(0,250): 'Description'}</p>
    
            <hr />
            <h4>{ apidata? value_converter(apidata.statistics.commentCount) :""} Comments</h4>

            {commentdata.map((item,ind)=>(

<div className="comment" key={ind}>
<img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
<div>
    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>  moment({item.snippet.topLevelComment.snippet.authorDisplayName.publishedAt}).fromNow()</span> </h3>
    <p> {item.snippet.topLevelComment.snippet.textDisplay} </p>
    <div className="comment-action">
        <img src={like} alt="" />
        <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
        <img src={dislike} alt="" />
        <span>6</span>
    </div>

</div>
</div>
            )) }
            

        
        </div>
      
    </div>
  )
}

export default PlayVideo
