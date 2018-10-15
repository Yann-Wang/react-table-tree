import React from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.css'

function Footer(props) {
  const { columns, dataset, total } = props
  return (
    <div className={styles.row}>
      {columns.map((col, i) => {
        const style = { textAlign: col.textAlign || 'left' }
        if (col.width) {
          style.flexGrow = 0
          style.flexShrink = 0
          style.flexBasis = col.width
        }

        const content = col.bodyRender ? col.bodyRender(dataset) : dataset[col.name]
        return (
          <div key={i} className={styles.column_item} style={style}>
            {i === 0 ? <span className={styles.total}>{total.name}</span> : content}
          </div>
        )
      })}
    </div>
  )
}

Footer.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      textAlign: PropTypes.oneOf(['left', 'center', 'right']),
      bodyRender: PropTypes.func
    })
  ).isRequired,
  dataset: PropTypes.object.isRequired,
  total: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
}

export default Footer
