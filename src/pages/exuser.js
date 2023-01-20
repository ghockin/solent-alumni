import React from "react";
import SolentLogo from '../images/logo-solent.png';
import ExUserFlippableCard from '../components/card/exusercard/ExUserFlippableCard.js'
import { Link } from 'react-router-dom';


function Exams() {
  return (
    <div>
      <div className="Title">
        <img className='Logo' src={SolentLogo} alt="Solent Logo" />
        <h1>Ex Student</h1>
      </div>
      <ExUserFlippableCard/>
        <Link to='/solent-alumni/homepage' className="HomepageNavL"><button>up</button></Link>
        <Link to='/solent-alumni/perks' className="HomepageNavR"><button>down</button></Link>
    </div>
  )
}

export default Exams