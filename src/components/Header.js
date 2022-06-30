import React from 'react';
import { connect } from 'react-redux';

import { authActions } from '../actions/auth.actions'
import styles from './Styles.module.css'

const user = JSON.parse(localStorage.getItem('user'))

function Header(props) {
  const { logOut } = props

  return(
    <div className={styles.header}>
      <div className={styles.taskTop}>
        <span className={styles.taskName}>Hello {user.map((e) => {return e.username})}</span>
        <div className={styles.taskBtn}>
          <button className={styles.btnLogout} onClick={() => logOut()}>LOG OUT</button>
        </div>
      </div>
      <div className={styles.taskBot}>
        <span>TODO LIST APP</span>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => dispatch(authActions.logout())
  }
}

export default connect(null, mapDispatchToProps)(Header)