import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from "../components/Header"
import Footer from "../components/Footer"
import MainSection from "../components/MainSection"

class App extends Component {
  render() {
    const { todos } = this.props
    return (
      <div>
        <Header />
        <MainSection todos={todos} />
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
)(App)
