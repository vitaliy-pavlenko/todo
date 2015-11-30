import React, { Component, PropTypes } from 'react';
import mapValues from 'lodash/object/mapValues';

import styles from './TodoList.css';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    return (
      <ul className={styles.todoList}>
        {
          mapValues(this.props.todos, (item) => {
            return (<TodoItem
              key={item.id}
              id={item.id}
              command={item.command}
              done={item.done}
              {...this.props.actions} />);
          })
        }
      </ul>
    );
  }

}
