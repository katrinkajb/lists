import React, { Component } from 'react';
import QueenList from '../components/queens/QueenList';
import { getQueens } from '../services/dragRaceAPI';
import '../components/app/App.css';

export default class QueensContainer extends Component {
    state = {
        loading: true,
        queens: [],
    };

    async componentDidMount() {
        const queens = await getQueens();
        this.setState({
            queens,
            loading: false,
        });
        console.log(this.state);
    }

    render() {
        const { loading, queens } = this.state;

        // Add a loading spinner?
        if (loading) return <h1>Loading</h1>;

        return <QueenList queens={queens} />;  
    }
}
