import React, { Component, PropTypes } from 'react'

class TodoTextInput extends Component {

  handleSubmit(e) {
    if(e.which == 13){
      const text = e.target.value.trim();
      this.props.onSave(text)
    }
  }

  render() {
    return (
      <div>
        <input type="text"
          placeholder="input todo title"
          onKeyDown={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired
}

export default TodoTextInput
