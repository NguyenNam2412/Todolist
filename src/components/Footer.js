import React from 'react'
import { connect } from 'react-redux'


import { todosActions } from '../actions/todos.actions'
import { getTodolist } from '../selector'
import styles from './Styles.module.css'

function Footer(props) {
  const { todoList,
    complatedAll, activedAll, deleteAll
  } = props

  return (
    <div className={styles.bottom}>
      <button className={styles.btnbottom} onClick={() => complatedAll(todoList.filter(todo => !todo.complate))}>Complated All</button>
      <button className={styles.btnbottom} onClick={() => activedAll(todoList.filter(todo => todo.complate))}>Actived All</button>
      <button className={styles.btnbottom} onClick={() => deleteAll(todoList.filter(todo => todo.complate))}>Delete Complated</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    todoList: getTodolist(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    complatedAll: (list) => dispatch(todosActions.updateAll(list)),
    activedAll: (list) => dispatch(todosActions.updateAll(list)),
    deleteAll: (list) => dispatch(todosActions.deleteAll(list))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)