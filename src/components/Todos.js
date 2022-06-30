import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { BsPencilFill } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'

import { todosActions } from '../actions/todos.actions'
import { getTodolist } from '../selector'
import Header from "./Header"
import Textinput from "./TextInput"
import Links from "./Links"
import Footer from "./Footer"
import styles from './Styles.module.css'

function Todos(props) {
  const { getTodos, todoList, removeTodo, updateTodo, checkTodo } = props
  
  const [titleUpdate, setTitleUpdate] = useState('')
  
  useEffect(() => {
    getTodos()
  }, [getTodos]);

  return (
    <div className={styles.main}>
      <Header/>
      <Textinput sendUpdate={(title) => setTitleUpdate(title)}/>
      <Links/>
      {/* ------------------List todo--------------------*/}
      <div className={styles.render}>
        <ul className={styles.list}>
          {todoList.map(todo => (
            <li className={clsx(styles.listitem, {[styles.done]: todo.complate})} key={todo.id}>
              <label className={styles.itemname}>{todo.title}</label>
              <div className={styles.btn}>
                <input className={styles.checkbox} type="checkbox" id={todo.id} checked={todo.complate} onChange={() => checkTodo(todo)}/>
                <button className={styles.updatebtn} onClick={() => updateTodo(todo.id, titleUpdate)}>
                  <BsPencilFill className={styles.icon} /> 
                </button>
                <button className={styles.deletebtn} onClick={() => removeTodo(todo.id)}>
                  <FaTrash className={styles.icon} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
    );
  }

function mapStateToProps(state) {
  return {
    todoList: getTodolist(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => dispatch(todosActions.getAllTodos()),
    removeTodo: (id) => dispatch(todosActions.remove(id)),
    updateTodo: (id, titleUpdate) => dispatch(todosActions.update(id, titleUpdate)),
    checkTodo: (todo) => dispatch(todosActions.check(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)