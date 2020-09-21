import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
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

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { robots, searchField, cambioRicerca, pending } = this.props;
        const filtraRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <>
                <div className="tc">
                    <h1 className="f1"> RoboFriends </h1>
                    <SearchBox searchChange={cambioRicerca} />
                    <Scroll>
                        {pending ? <h1>Loading</h1> :
                            <ErrorBoundary>
                                <CardList robots={filtraRobot} />
                            </ErrorBoundary>
                        }
                    </Scroll>
                </div>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);