import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import Footer from "../components/Footer"


const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = { filter: SHOW_ALL }
  }

  handleShow(filter) {
    this.setState({ filter })
  }

  renderCompleteAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
        <div className="toggle-all">
          <input type="checkbox"
                 checked={completedCount === todos.length}
                 onChange={actions.completeAll} />
          complete all
        </div>
      )
    }
  }

  renderFooter(filter){
    return (
      <Footer
        filter={ filter}
        onShow={this.handleShow.bind(this)} />
    )
  }

  render() {
    const { todos, actions } = this.props
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )
    const { filter } = this.state
    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    return (
      <section>
        {this.renderCompleteAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
        {this.renderFooter(filter)}
      </section>
    );
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection
