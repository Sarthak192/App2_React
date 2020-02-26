import React, {Component} from 'react';

class Counter extends Component{
    // constructor(){
    //     super();
    //     console.log(this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    state = {
        counter: this.props.value,
        tags: ["tag1", "tag2", "tag3"]
    }

    style = {
        fontSize: 20,
        fontWeight: 'bold'

    }

    render(){
        return (
            <React.Fragment>
                {this.props.children}
                <span style = {this.style} className = {this.formatCounterColour()}>{this.formatCount()}</span>
                <button onClick = {()=>this.handleIncrement({id: 2})} className = "btn btn-secondary btn-sm">Increment</button>
                <button onClick = {() => this.props.onDelete(this.props.id)} className = "btn btn-danger btn-sm m-2">Delete</button>
                {this.state.tags.length === 0 && "Please create a new tag"}
                {this.renderTags()}
            </React.Fragment>
        )
    }

    formatCount(){
        const {counter} = this.state;
        return counter === 0 ? "Zero" : counter
    }

    formatCounterColour(){
        let classes = "badge m-2 badge-"
        classes += this.state.counter === 0 ? "warning" : "primary"
        return classes;
    }

    renderTags(){
        if(this.state.tags.length === 0){
            return <p>There are no tags</p>
        }
        return (
            <ul>
                {this.state.tags.map(function(tag){
                    return <li key = {tag}>{tag}</li>
                })}
            </ul>
        )
    }

    handleIncrement = (id)=>{
        console.log("Clicked", this);
        console.log(id);
        this.setState({counter: this.state.counter + 1})
    }
}

export default Counter;