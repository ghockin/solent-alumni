import React from "react";
import SolentLogo from '../images/logo-solent.png';
import { Link } from 'react-router-dom';

function Perks() {
  return (
    <div>
      <div className="Title">
        <img className='Logo' src={SolentLogo} alt="Solent Logo" />
        <h1>Perks</h1>
      </div>
      <Link to='/solent-alumni/homepage' className="HomepageNavL"><button>up</button></Link>
      <Link to='/solent-alumni/news' className="HomepageNavR"><button>down</button></Link>
    </div>
  )
}

export default Perks