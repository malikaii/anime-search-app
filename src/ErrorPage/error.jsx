import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="container">
        <h1 className="text-center">Page Not Found.</h1>
        <p className='text-center'>Would you like to <Link to="/">Go Home</Link></p>
    </div>
  )
}

export default Error;