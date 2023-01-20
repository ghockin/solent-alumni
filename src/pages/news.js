import React from "react";
import SolentLogo from '../images/logo-solent.png';

function News() {
  return (
    <div>
      <img className='Logo' src={SolentLogo} alt="Solent Logo" />
      <div className="Title"><h1>Solent News</h1></div>
    </div>
  )
}

export default News