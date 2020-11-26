import React, { Component } from 'react';
import CardList from '../components/CardList.js';
import Scroll from '../components/Scroll.js';
import SearchBox from '../components/SearchBox.js';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json() )
            .then(users => this.setState({ robots: users}) );
        
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) 
    }
    render() {
        const filteredRobots = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length===0){
            return <h1>LOADING . . .</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll style={{overflowY: 'scroll', border: '2px solid black', height: '580px'}}>
                        <CardList robots = { filteredRobots }/>
                        <CardList robots = { filteredRobots }/>
                    </Scroll>
                </div>
            )
        }

    }
    
}

export default App;