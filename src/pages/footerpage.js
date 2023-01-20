import React from "react";
import { FooterContainer } from '../containers/footer'
import SolentLogo from '../images/logo-solent.png';

function NewUser() {
  return (
    <div>
      <img className='Logo' src={SolentLogo} alt="Solent Logo" />
      <div className="Title"><h1>Footer</h1></div>

      <FooterContainer />
    </div>
  )
}

export default NewUser