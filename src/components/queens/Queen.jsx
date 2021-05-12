import React from 'react';
import PropTypes from 'prop-types';
import '../app/App.css';

const Queen = ({ name, image_url, quote, winner, missCongeniality }) => (
    <span className='.list-item'>
        <p>{name}</p>
        <p>{quote}</p>
        {/* <p>Winner? {winner}</p>
        <p>Miss Congeniality? {missCongeniality}</p> */}
        <img className='pic' src={image_url} alt={name} />
    </span>
);

Queen.propTypes = {
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    // winner: PropTypes.boolean.isRequired,
    // missCongeniality: PropTypes.boolean.isRequired,
    image_url: PropTypes.string,
};

export default Queen;
