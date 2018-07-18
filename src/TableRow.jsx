import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './TableRow.css'

function TableRow(props) {
  const { columns, rowKey, dataset } = props
  const { __iconPlus: iconPlus } = dataset
  const expandStyle = cx(iconPlus ? styles.plus : styles.minus, styles.expandIcon)
  const handleExpandChange = () => {
    props.handleExpandIconClick(dataset[rowKey])
  }
  return (
    <div key={dataset[rowKey]} className={styles.row}>
      {columns.map((col, i) => {
        const style = { textAlign: col.textAlign || 'left' }
        if (col.width) {
          style.flexGrow = 0
          style.flexShrink = 0
          style.flexBasis = col.width
        }
        const level = {}
        level.marginLeft = (dataset.__level - 1) * 20 + 'px'
        const content = col.bodyRender ? col.bodyRender(dataset) : dataset[col.name]
        const expandWrap = cx(styles.expandWrap, styles.firstColumnPart)
        return (
          <div key={i} className={styles.column_item} style={style}>
            {i === 0 ? (
              <div className={styles.firstColumn} style={level}>
                <div className={expandWrap}>
                  <span className={expandStyle} onClick={handleExpandChange} />
                </div>
                <div className={styles.firstColumnPart}>{content}</div>
              </div>
            ) : (
              content
            )}
          </div>
        )
      })}
    </div>
  )
}

TableRow.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      textAlign: PropTypes.oneOf(['left', 'center', 'right']),
      bodyRender: PropTypes.func
    })
  ).isRequired,
  rowKey: PropTypes.string.isRequired,
  dataset: PropTypes.object.isRequired,
  handleExpandIconClick: PropTypes.func.isRequired
}

export default TableRow
