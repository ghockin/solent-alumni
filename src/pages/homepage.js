import React from 'react';
import { Link } from 'react-router-dom';
import AlumniHomepage from '../images/ImgAlumniHomepage.png';



function homepage() {

  return (
    <div>
      <div className="Homepage">
        <img src={AlumniHomepage} alt="Alumni Homepage" />
        <h1>Solent Alumni</h1>
        <Link to='/solent-alumni/exuser' className="HomepageNavL"><button>Ex Student</button></Link>
        <Link to='/solent-alumni/newuser' className="HomepageNavR"><button>New Student</button></Link>
      </div>
    </div>
  )
}

export default homepage