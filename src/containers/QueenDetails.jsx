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
        console.log(this.state.queen)
        return (
            <>
                {/* <Queen queen={this.state.queen} /> */}
                <h1>{this.state.queen.name}</h1>
                <div>{this.state.queen.winner}</div>
                {this.state.queen.missCongeniality}
                <div>"{this.state.queen.quote}"</div>
                {/* {this.state.queen.seasons}
                {this.state.queen.lipsyncs} */}
                <img 
                    src={this.state.queen.image_url}
                    alt={this.state.queen.name} 
                    style={{
                        height: '500px',
                        width: 'auto',
                    }} 
                />
            </>
        );
    }
}

