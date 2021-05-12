import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Queen from './Queen';
import '../app/App.css';

const QueenList = ({ queens }) => (
    <>
        <ul aria-label='queens'>
            {queens.map((queen) => {
                return (
                    <Link to={'/${queen.id}'}>
                        <li className='queensList' key={queen.id}>
                            <Queen
                                name={queen.name}
                                quote={queen.quote}
                                image_url={queen.image_url}
                            />
                        </li>
                    </Link>
                );
            })}
        </ul>
    </>
);

QueenList.propTypes = {
    queens: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            quote: PropTypes.string.isRequired,
            image_url: PropTypes.string,
        })
    ).isRequired,
};

export default QueenList;
