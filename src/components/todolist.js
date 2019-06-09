import React , {Component} from 'react';
import Todos from '../todos.js';
import AddTodo from '../addtodo.js';


class Todolist extends Component{
  state ={
    todos:[
      {id:1 ,content:'finish the course'}
      ,
      {id:2 ,content:'play a game'}
    ]
  }
  deleteTodo=(id)=>{
   let todos =this.state.todos.filter(todo =>{
     //this condition returns true when the codition happens
     return todo.id !== id ;
   })
   //here we set the runtime state to to the updated after delete
   this.setState({
     todos:todos
   })
    console.log(id);
  }
  
  AddTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos:todos
    })
    console.log(this.state);
  }

  render() {
    return (

        <div className="todo-app container">
      
          <h1 className="center blue-text">Todo's</h1>
          <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
          <AddTodo AddTodo={this.AddTodo}/>
        </div>

    );
  }
}
export default Todolist;
