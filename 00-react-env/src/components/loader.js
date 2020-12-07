import React from 'react';

const Loader = ({ loading }) => {
  const display = loading ? 'block' : 'none';

  return (
    <h1 className="loader" style={{display: `${display}`}}>Loading...</h1>
  )
}

export default Loader;