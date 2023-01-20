import React from "react";
import SolentLogo from '../images/logo-solent.png';
import { Link } from 'react-router-dom';

function Explore() {
  return (
    <div>
      <div className="Title">
        <img className='Logo' src={SolentLogo} alt="Solent Logo" />
        <h1>Explore</h1>
      </div>
      <Link to='/solent-alumni/news' className="HomepageNavL"><button>Up</button></Link>
      <Link to='/solent-alumni/footer' className="HomepageNavR"><button>Down</button></Link>
    </div>
  )
}

export default Explore