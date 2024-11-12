import React from 'react'
import './Video.css'
import PlayVideo from '../../components/PlayVideo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
export const Video = () => {
  return (
    <div className='play-container'>

<PlayVideo/>
<Recommended/>
    </div>
  )
}
