
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home'

import { Video } from './pages/Video/Video';
import { useState } from 'react';


function App() {

const [sidebar,setSidebar] =useState(true);

  return (
  <div>
    <Navbar setSidebar={setSidebar} sidebar={sidebar}/>

    <Routes>
      <Route path='/' element={<Home sidebar={sidebar}/>}/>
      <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
    </Routes>
  </div>
  );
}

export default App;
