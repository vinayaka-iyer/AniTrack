import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="background-blur-1"></div>
      <div className="background-blur-2"></div>
      <Navbar />
        <div className='content'>
      <p className="home-para">
        AniTrack is an anime tracking platform that
         allows users to easily keep
          track of anime they've 
          watched and rate them.
      </p>

      <div className="add-btn-div">
        <button>
          <Link to="/add" className="add-btn purp-btn zoom">
            Add new anime
          </Link>
        </button>
        <button>
          <Link to="/Anime" className="add-btn purp-btn zoom">
            My anime list
          </Link>
        </button>
      </div>
      </div>
    </div>
  )
}

export default Home
