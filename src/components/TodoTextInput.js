import React, { Component, PropTypes } from 'react'

class TodoTextInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      text: this.props.text || ''
    }
  }

  handleSubmit(e) {
    if(e.which == 13){
      const text = e.target.value.trim();
      this.props.onSave(text)
      this.setState({text: ''})
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div className="todo-input">
        <input type="text"
          placeholder="input todo title"
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string
}

export default TodoTextInput
