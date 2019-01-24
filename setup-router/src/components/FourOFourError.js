import React from 'react';
import { Link } from 'react-router-dom';

const FourOFour = () => {
  return (
    <div>
      <h1>404!</h1>
      <p>
        Oops.. Looks like you are lost! Try going to the <Link to="/">Home</Link> Page
      </p>
    </div>
  );
};

export default FourOFour;
