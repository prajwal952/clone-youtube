import React, { useEffect, useState } from 'react'
import './Playvideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY } from '../../Data';



const PlayVideo = ({videoId}) => {

const [apidata,setApidata]=useState(null);

// const fetchVideoData= async()=>{
//     //fatching vidoes data
//     const videoDeatils_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=${API_KEY}`
//     // const data = await fetch(videoDeatils_url);
//     // const parseData= await data.json();
//     // setApidata(parseData.items[0])

//         await fetch(videoDeatils_url).then(res=>res.json()).then(data=>setApidata(data.items[0]))
// }



const fetchVideoData = async () => {
    const videoDeatils_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    
    try {
        // Fetch data from YouTube API
        const response = await fetch(videoDeatils_url);

        // Check if the response is successful
        if (!response.ok) {
            console.error("Failed to fetch data", response.status, response.statusText);
            return;
        }

        // Parse the JSON response
        const data = await response.json();

        // Log the full data to inspect the structure
        console.log("Fetched Data:", data);

        // Check if items array exists and has data
        if (data.items && data.items.length > 0) {
            setApidata(data.items[0]);  // Set the first item in the state
        } else {
            console.error("No video data found.");
        }
    } catch (error) {
        console.error("Error fetching video data:", error);
    }
};

useEffect(()=>{
    fetchVideoData()

},[])

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}

        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1` } frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>

        {/* <h3>{apidata.snippet.title}</h3> */}
        {console.log("log is",apidata.items[0])}
        <div className='Play-video-info'>
            <p>1525 views &bull; 2days ago</p>
            <div>
                <span>
                    <img src={like} alt="" /> 125
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

        <hr />

        <div className="publisher">
            <img src={jack} alt="" />
            <div>
                <p>Discovery Tv</p>
                <span>1M Subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className='vid-description'>
            <p>Channel which helps you to explore</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, officia? Fugiat voluptatem vel praesentium voluptas possimus harum quaerat odio!</p>
            <hr />
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Brayi Leo <span>1 day ago</span> </h3>
                    <p> Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, maxime.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>6</span>
                    </div>
                
                </div>
            </div>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Brayi Leo <span>1 day ago</span> </h3>
                    <p> Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, maxime.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>6</span>
                    </div>
                
                </div>
            </div>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Brayi Leo <span>1 day ago</span> </h3>
                    <p> Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, maxime.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>6</span>
                    </div>
                
                </div>
            </div>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Brayi Leo <span>1 day ago</span> </h3>
                    <p> Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, maxime.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>6</span>
                    </div>
                
                </div>
            </div>

            <div className="comment">
                <img src={user_profile} alt="" />
                <div>
                    <h3>Brayi Leo <span>1 day ago</span> </h3>
                    <p> Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, maxime.</p>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                        <span>6</span>
                    </div>
                
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default PlayVideo
