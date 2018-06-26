import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       todos: [
         { description: 'Walk the cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false },
         { description: 'Buy new dishes', isCompleted: false }
       ],
       newTodoDescription: ''
     };
   }

   deleteToDoHandler(delete) {
     //const delete = this.state.todos.filter();
     //const deleteTodo = delete[index];
     //this.setState({todos: [deleteToDo]});
     //b = this.state.todos.filter(e => e.todos === [{ description: 'Walk the cat', isCompleted: true }]);

     //b.forEach(f => a.splice(a.findIndex(e => e.todos === f.todos),1));

     //this.setState({todos});

  const value === this.state.todos[0];
  const delete === value;

const filtered = this.state.todos.filter(deleteToDoHandler);
     console.log(filtered);
   }

   handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

   handleSubmit(e) {
        e.preventDefault();
        if (!this.state.newTodoDescription) { return }
        const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
      }

   toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  //deleteTodoHandler={ () => this.deleteToDoHandler(index)}

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
             <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteTodoHandler={ () => this.deleteToDoHandler(index)} />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
            <input type="submit" />
          </form>
          <button onClick={this.deleteTodoHandler}>Delete</button>
      </div>
    );
  }
}

export default App;
