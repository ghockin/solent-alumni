import React from 'react';
import SolentLogo from '../images/logo-solent.png';

// TODO:
// 2 second wait logo then fades in change opacity
// once at opacity 100 2 second wait 
// logo then fades out change opacity
// once at opactiy 0 go to homepage

function homepage() {
  return (
    <div>
      <img src={SolentLogo} alt="Solent Logo" />
    </div>
  )
}

export default homepage