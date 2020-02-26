import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component{
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    }

    render(){
        return(
            <React.Fragment>
                <button onClick = {this.handleReset} className = "btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter=> 
                <Counter 
                    key = {counter.id} 
                    id = {counter.id} 
                    value = {counter.value} 
                    onDelete = {this.handleDelete}>
                    <h4>Counter #{counter.id}</h4>
                </Counter>)}
            </React.Fragment>
        )
    }

    zhandleDelete = (counterId) => {
        console.log("Clicked on Delete", counterId);
        const counters = this.state.counters.filter(c=> c.id !== counterId);
        this.setState({counters: counters})
    }

    handleReset = () => {
        const counters = this.state.counters.map(c =>{
            c.value = 0
            return c;
        })
        this.setState({counters: counters})
    }
}

export default Counters