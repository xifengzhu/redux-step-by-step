import React, { Component, PropTypes } from 'react'

class MainSection extends Component {
  render() {
    const { todos, actions } = this.props
    return (
      <ul className="todo-list">
        {todos.map(todo =>
          <li key={todo.id}>{todo.text}</li>
        )}
      </ul>
    );
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  // actions: PropTypes.object.isRequired
}

export default MainSection
