import React from "react";
import SolentLogo from '../images/logo-solent.png';

function NewUser() {
  return (
    <div>
      <img className='Logo' src={SolentLogo} alt="Solent Logo" />
      <div className="Title"><h1>New Student</h1></div>
    </div>
  )
}

export default NewUser