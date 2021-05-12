import React from 'react';
import PropTypes from 'prop-types';

const Queen = ({ name, image_url, quote }) => (
    <>
        <img src={image_url} alt={name} />
        <p>{name}</p>
        <p>{quote}</p>
    </>
);

Queen.propTypes = {
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
};

export default Queen;
