import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

const Error = ({error}) => {
  return (
    <div className="row justify-content-center"><h4>{error}</h4></div>
  );
};

Loading.propTypes = {
  error: PropTypes.string
};

export default Error;
