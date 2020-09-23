import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './MainPage.css';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';



class MainPage extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    filtraRobots = robots => {
        return robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }

    render() {
        const { robots, cambioRicerca, pending } = this.props;
        return (
            <>
                <div className="tc">
                    <h1 className="f1"> RoboFriends </h1>
                    <SearchBox searchChange={cambioRicerca} />
                    <Scroll>
                        {pending ? <h1>Loading</h1> :
                            <ErrorBoundary>
                                <CardList robots={this.filtraRobots(robots)} />
                            </ErrorBoundary>
                        }
                    </Scroll>
                </div>
            </>
        );
    }
}

export default MainPage;