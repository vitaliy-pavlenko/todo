import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddTodoInput.css';

export default class AddTodoInput extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  render () {
    return (
      <input
        type="text"
        autoFocus="true"
        className={classnames('form-control', styles.addTodoInput)}
        placeholder="Add a todo"
        value={this.state.name}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleSubmit.bind(this)} />
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      command: this.props.command || ''
    };
  }

  handleChange (e) {
    this.setState({ command: e.target.value });
  }

  handleSubmit (e) {
    const command = e.target.value.trim();
    if (e.which === 13) {
      this.props.addTodo(command);
      this.setState({ command: '' });
    }
  }

}
