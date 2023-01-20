import React from "react";
import SolentLogo from '../images/logo-solent.png';
import ExUserFlippableCard from '../components/card/exusercard/ExUserFlippableCard.js'


function Exams() {
  return (
    <div>
      <div className="Title">
        <img className='Logo' src={SolentLogo} alt="Solent Logo" />
        <h1>Ex Student</h1>
        <ExUserFlippableCard/>
      </div>
    </div>
  )
}

export default Exams