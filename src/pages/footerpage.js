import React from "react";
import { FooterContainer } from '../containers/footer'
import SolentLogo from '../images/logo-solent.png';
import { Link } from 'react-router-dom';

function NewUser() {
  return (
    <div>
      <div className="Title">
        <img className='Logo' src={SolentLogo} alt="Solent Logo" />
        <h1>Footer</h1>
      </div>
      <div class="nav-container-up">
        <div>
          <Link to='/solent-alumni/homepage' ><button>up</button></Link>
        </div>
      </div>
      <FooterContainer />
    </div>
  )
}

export default NewUser