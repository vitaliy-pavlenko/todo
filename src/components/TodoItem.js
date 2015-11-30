import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './TodoItem.css';

export default class TodoItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    command: PropTypes.string.isRequired,
    done: PropTypes.bool,
    doneTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };

  render () {
    return (
      <li className={styles.todoItem}>
        <div className={styles.todoInfos}>
          {this.props.command}
        </div>
        <div className={styles.todoActions}>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.doneTodo(this.props.id)}>
            <i className={classnames('fa', { 'fa-check-circle': this.props.done }, { 'fa-check-circle-o': !this.props.done })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`} onClick={() => this.props.deleteTodo(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}
