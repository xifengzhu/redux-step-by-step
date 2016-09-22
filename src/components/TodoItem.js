import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import '../styles/TodoItem.css';


class TodoItem extends Component {

  render() {
    const { todo, toggleTodo, deleteTodo } = this.props
    return (
      <li
        className={classnames({
          completed: todo.completed,
          todoitem: true
        })}
        onClick={()=> toggleTodo(todo.id )}>
        {todo.text}
        <button onClick={() => deleteTodo(todo.id)}>destroy</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoItem


