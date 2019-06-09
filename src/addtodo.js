import React , {Component} from 'react';

class addTodo extends Component{
state ={
    content :''
}
handleChange = (e) =>{
    this.setState({
        content:e.target.value 
    })
}
handleSubmit = (e) =>{
    e.preventDefault();
    this.props.AddTodo(this.state);
    this.setState({
        content:''
    })
}
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label ></label>
                    <input type="text" onChange={this.handleChange}value={this.state.content}/>
                </form>
            </div>
        )
    }
}
export default addTodo;