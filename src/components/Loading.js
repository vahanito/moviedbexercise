import React from 'react';
import { BeatLoader } from 'react-spinners';
import PropTypes from 'prop-types';

const Loading = ({loading}) => {
  return (
    <div className="row justify-content-center pt-4">
      <BeatLoader
        size={20}
        loading={loading}
        color="#4A90E2"
      />
    </div>
  );
};

Loading.propTypes = {
  loading: PropTypes.bool
};

export default Loading;
