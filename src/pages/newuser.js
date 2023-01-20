import React from "react";
import SolentLogo from '../images/logo-solent.png';
import { Link } from 'react-router-dom';

function NewUser() {
  return (
    <div>
      <div className="Title">
        <img className='Logo' src={SolentLogo} alt="Solent Logo" />
        <h1>New Student</h1>
      </div>
      <Link to='/solent-alumni/homepage' className="HomepageNavL"><button>up</button></Link>
      <Link to='/solent-alumni/perks' className="HomepageNavR"><button>down</button></Link>
    </div>
  )
}

export default NewUser