import React from 'react';
import PropTypes from 'prop-types';
import '../app/App.css';

const Queen = ({ name, image_url, quote, winner, missCongeniality }) => (
    <span className='.list-item'>
        <p>{name}</p>
        <p>"{quote}"</p>
        <img 
            className='pic' 
            src={image_url} 
            alt={name} 
            style={{
                width: '300px',
                height: 'auto',
            }} 
            />
    </span>
);

Queen.propTypes = {
    queen: PropTypes.shape({
        id:PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quote: PropTypes.string.isRequired,
        image_url: PropTypes.string,
    })
};

export default Queen;
