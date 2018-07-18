import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.css'

function Header(props) {
  const { columns } = props
  return (
    <div className={styles.title}>
      {columns.map((column, i) => {
        const style = { textAlign: column.textAlign || 'left' }
        if (column.width) {
          style.flexGrow = 0
          style.flexShrink = 0
          style.flexBasis = column.width
        }
        return (
          <span key={i} className={styles.column_title} style={style}>
            {column.title}
          </span>
        )
      })}
    </div>
  )
}

Header.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      textAlign: PropTypes.oneOf(['left', 'center', 'right']),
      width: PropTypes.string
    })
  ).isRequired
}

export default Header
