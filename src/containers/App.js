import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import MainPage from '../components/MainPage';
import { setSearchField, requestRobots } from '../actions';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        pending: state.requestRobots.isPending
    }
}

const mapDispatchToProps = (dispatch) => {      //dispatch = trigger azione dopo evento
    return {
        cambioRicerca: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    render() {
        return <MainPage {...this.props} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);