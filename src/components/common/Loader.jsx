import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({isLoading}) => (
    !isLoading ? null : <div className='loader'>
        Loading ...
    </div>
)

Loader.propTypes = {
    isLoading: PropTypes.bool.isRequired
}
export default Loader
