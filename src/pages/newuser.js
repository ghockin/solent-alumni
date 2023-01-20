import React from "react";
import SolentLogo from '../images/logo-solent.png';

function NewUser() {
  return (
    <div>
      <div className="Title">
        <img className='Logo' src={SolentLogo} alt="Solent Logo" />
        <h1>New Student</h1>
      </div>
    </div>
  )
}

export default NewUser