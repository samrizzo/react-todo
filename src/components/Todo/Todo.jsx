import React from 'react';
import './Todo.css';

class Todo extends React.Component {

   constructor(props) {
      super(props);
      this.state = { todos: [], currentTodo: '', todoId: 1 };
   }

   addTodo = () => {

      if (this.state.currentTodo !== '') {
         let nextTodoId = this.state.todoId + 1;
         this.setState({ todoId: nextTodoId });

         var todo = {
            id: this.state.todoId,
            name: this.state.currentTodo
         };

         var todoList = this.state.todos;
         todoList.push(todo);

         this.setState({ todos: todoList });
         this.setState({ currentTodo: '' });
      }
      else {
         alert("Error: You cannot add an empty task");
      }
   }

   deleteTodo = (key) => {
      let todoList = this.state.todos.filter(todo => todo.id !== key);
      this.setState({ todos: todoList });
   }

   handleKeyDown = (event) => {
      if (event.key === "Enter") {
         this.addTodo();
      }
   }

   updateTodo = (event) => {
      this.setState({ currentTodo: event.target.value });
   }
    
   render() {
      return (
         <div className="todo-container">
            <TodoInput addTodo={this.addTodo} currentTodo={this.state.currentTodo} handleKeyDown={this.handleKeyDown} updateTodo={this.updateTodo}/>
            <TodoList deleteTodo={this.deleteTodo} todos={this.state.todos}/>
         </div>
      );
   }
}

class TodoInput extends React.Component {
   render() {
      return (
         <div className="todo-input-container">
            <div className="input-box">
               <input className="todo-input" placeholder="Add a new task" value={this.props.currentTodo} onChange={this.props.updateTodo} onKeyDown={this.props.handleKeyDown}/>
               <button className="todo-btn" onClick={this.props.addTodo}>Add</button>
            </div>
         </div>
      );
   }
}

class TodoList extends React.Component {

   constructor(props) {
      super(props);
   }

   render() {

      let instructionText = this.props.todos.length > 0 ? "Click on a task to delete it from the list" : "";
      let noTodoText = this.props.todos.length > 0 ? "" : "There are currently no tasks to show";

      return (
         <div>
            <p className="todo-instruction">{instructionText}</p>
            <p className="todo-none">{noTodoText}</p>
            <ul className="todo-list">
      {this.props.todos.map(todo => <li title="Remove this task" key={todo.id} onClick={() => this.props.deleteTodo(todo.id)}>{todo.name}</li>)}
            </ul>
         </div>
      );
   }
}

export default Todo;