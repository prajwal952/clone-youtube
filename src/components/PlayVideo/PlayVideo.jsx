import React from 'react'
import './Playvideo.css'

import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';



const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Best Video of this century</h3>
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
