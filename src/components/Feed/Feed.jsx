import React from 'react';
import './Feed.css';
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import { Link } from 'react-router-dom';

const Feed = () => {
  return (
    <div className='feed'>

      <Link to={`video/20/001`} className='card'>
        <img src={thumbnail1} alt="thumbnail1" />
        <h2>Best coding channel that can help you to be web development</h2>
        <h3>GeeksForGeeks</h3>
        <p>15K views &bull; 2 days ago</p>
      </Link>

      <div className='card'>
        <img src={thumbnail2} alt="thumbnail2" />
        <h2>Learn JavaScript in 30 minutes</h2>
        <h3>JavaScript Mastery</h3>
        <p>25K views &bull; 3 days ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail3} alt="thumbnail3" />
        <h2>HTML and CSS for Beginners</h2>
        <h3>Web Dev Simplified</h3>
        <p>30K views &bull; 5 days ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail4} alt="thumbnail4" />
        <h2>React Basics for Newbies</h2>
        <h3>CodeWithHarry</h3>
        <p>40K views &bull; 1 week ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail5} alt="thumbnail5" />
        <h2>Master Python in 60 minutes</h2>
        <h3>Tech With Tim</h3>
        <p>50K views &bull; 2 weeks ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail6} alt="thumbnail6" />
        <h2>Node.js Tutorial for Beginners</h2>
        <h3>Academind</h3>
        <p>10K views &bull; 3 weeks ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail7} alt="thumbnail7" />
        <h2>Build Full Stack App with React</h2>
        <h3>Traversy Media</h3>
        <p>60K views &bull; 1 month ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail8} alt="thumbnail8" />
        <h2>Advanced JavaScript Concepts</h2>
        <h3>Programming with Mosh</h3>
        <p>80K views &bull; 2 months ago</p>
      </div>



      <div className='card'>
        <img src={thumbnail1} alt="thumbnail1" />
        <h2>Best coding channel that can help you to be web dev</h2>
        <h3>GeeksForGeeks</h3>
        <p>15K views &bull; 2 days ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail2} alt="thumbnail2" />
        <h2>Learn JavaScript in 30 minutes</h2>
        <h3>JavaScript Mastery</h3>
        <p>25K views &bull; 3 days ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail3} alt="thumbnail3" />
        <h2>HTML and CSS for Beginners</h2>
        <h3>Web Dev Simplified</h3>
        <p>30K views &bull; 5 days ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail4} alt="thumbnail4" />
        <h2>React Basics for Newbies</h2>
        <h3>CodeWithHarry</h3>
        <p>40K views &bull; 1 week ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail5} alt="thumbnail5" />
        <h2>Master Python in 60 minutes</h2>
        <h3>Tech With Tim</h3>
        <p>50K views &bull; 2 weeks ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail6} alt="thumbnail6" />
        <h2>Node.js Tutorial for Beginners</h2>
        <h3>Academind</h3>
        <p>10K views &bull; 3 weeks ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail7} alt="thumbnail7" />
        <h2>Build Full Stack App with React</h2>
        <h3>Traversy Media</h3>
        <p>60K views &bull; 1 month ago</p>
      </div>

      <div className='card'>
        <img src={thumbnail8} alt="thumbnail8" />
        <h2>Advanced JavaScript Concepts</h2>
        <h3>Programming with Mosh</h3>
        <p>80K views &bull; 2 months ago</p>
      </div>

    </div>
  );
}

export default Feed;
