import React from 'react'
import { connect } from 'react-redux'

import { todosActions } from '../actions/todos.actions'
import { filtersConstants } from '../constants/filters.constans'
import { getActiveCount, getCompletedCount } from '../selector'
import styles from './Styles.module.css'

const links = [
  {id: filtersConstants.SHOW_ALL, displayName: 'ALL'},
  {id: filtersConstants.SHOW_COMPLETED, displayName: 'DONE'},
  {id: filtersConstants.SHOW_ACTIVE, displayName: 'TODO'}
]

function Links(props) {
  const {onShow, activeCount, completedCount} = props

  return (
    <div className={styles.nav}>
      <div className={styles.count}>
        <span className={styles.countnumb}>COMPLATED: {completedCount} </span>
        <span className={styles.countnumb}>ACTIVED: {activeCount} </span>
      </div>
      <div className={styles.links}>
        {links.map(link =>
          <button className={styles.linkbtn} key={link.id} onClick={() => onShow(link.id)}>
            {link.displayName}
          </button>  
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    activeCount: getActiveCount(state),
    completedCount: getCompletedCount(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onShow: (id) => dispatch(todosActions.setFilter(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Links);
