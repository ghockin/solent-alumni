import React from "react";
import SolentLogo from '../images/logo-solent.png';

function News() {
  return (
    <div>
      <div className="Title">
        <img className='Logo' src={SolentLogo} alt="Solent Logo" />
        <h1>News</h1>
      </div>
    </div>
  )
}

export default News