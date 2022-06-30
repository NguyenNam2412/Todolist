import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux"

import { todosActions } from '../actions/todos.actions'
import styles from './Styles.module.css'

function TextInput(props) {
  const { addTodos } = props;
  const [title, setTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const prevTitle = useRef()

  useEffect(() => {
    setNewTitle(title)
  }, [title]);

  useEffect(() => {
    prevTitle.current = newTitle
  }, [newTitle]);

  useEffect(() => {
    props.sendUpdate(newTitle)
  })

  const handleKeyDown = (event) => {
    if(event.key === "Enter") {
      if(title) {
        addTodos(title);
      }
      setTitle('');
    }
  }

  const onSendText = () => {
    if (title) {
      addTodos(title);
    }
    setTitle('');
  };

  return (
    <div className={styles.textInput}>
      <input className={styles.input} type='text' name='text' value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={handleKeyDown}/>
      <button className={styles.addbtn} onClick={onSendText}>
          Add new task
      </button>
    </div>
  );
}


function mapDispatchToProps(dispatch) {
  return {
    addTodos: (title) => dispatch(todosActions.add(title)),
  }
}

export default connect(null, mapDispatchToProps)(TextInput)