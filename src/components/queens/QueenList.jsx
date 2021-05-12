import React from 'react';
import PropTypes from 'prop-types';
import Queen from './Queen';

const QueenList = ({ queens }) => (
    <ul aria-label='queens'>
        {queens.map((queen) => (
            <li key={queen.id}>
                <Queen
                    name={queen.name}
                    quote={queen.quote}
                    image_url={queen.image_url}
                />
            </li>
        ))}
    </ul>
);

QueenList.propTypes = {
    queens: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            quote: PropTypes.string.isRequired,
            image_url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default QueenList;
