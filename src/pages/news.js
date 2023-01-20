import React from "react";
import SolentLogo from '../images/logo-solent.png';
import { Link } from 'react-router-dom';

function News() {
  return (
    <div>
      <div className="Title">
        <img className='Logo' src={SolentLogo} alt="Solent Logo" />
        <h1>News</h1>
      </div>
      <Link to='/solent-alumni/perks' className="HomepageNavL"><button>up</button></Link>
      <Link to='/solent-alumni/explore' className="HomepageNavR"><button>down</button></Link>
    </div>
  )
}

export default News