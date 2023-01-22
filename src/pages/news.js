import React from "react";
import SolentLogo from '../images/logo-solent.png';
import { Link } from 'react-router-dom';
import ExUserFlippableCard from '../components/card/exusercard/ExUserFlippableCard.js'

function News() {
  return (
    <div>
      <div className="Title">
        <img className='Logo' src={SolentLogo} alt="Solent Logo" />
        <h1>News</h1>
      </div>
      <div class="nav-container-up">
        <div>
          <Link to='/solent-alumni/perks' ><button>up</button></Link>
        </div>
      </div>
      <div class="nav-container-bottom">
        <div>
          <Link to='/solent-alumni/explore'><button>down</button></Link>
        </div>
      </div>

      {/* Contnent */}
      <div class="flex-container">
        <div> {/*0*/}
          <ExUserFlippableCard />
        </div>
        <div> {/*1*/}
          <ExUserFlippableCard />
        </div>
        <div> {/*2*/}
          <ExUserFlippableCard />
        </div>
      </div>
      <div class="flex-container">
        <div> {/*1*/}
          {/* <ExUserFlippableCard /> */}
        </div>
        <div> {/*2*/}
          {/* <ExUserFlippableCard /> */}
        </div>
        <div>  {/*3*/}
          {/* <ExUserFlippableCard /> */}
        </div>
      </div>
    </div>
  )
}

export default News