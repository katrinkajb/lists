import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../components/app/App.css';
import Queen from '../components/queens/Queen';
import { getQueenById } from '../services/dragRaceAPI';

export default class QueenDetails extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.number.isRequired
            }).isRequired
        }).isRequired
    }

    state={
        queen: {
            id: 0,
            name: '',
            winner: false,
            missCongeniality: false,
            quote: '',
            seasons: [],
            lipsyncs: [],
            image_url: ''
        },
    }

    async componentDidMount() {
        const oneQueen = await getQueenById(this.props.match.params.id);
        this.setState({
            queen: oneQueen
        });
    }

    render() {
        "HELLOO"
        return (
            <>
                <Queen queen={this.state.queen} />
            </>
        );
    }
}

