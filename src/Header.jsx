import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      positionValue: 'static',
      width: 'auto',
      zIndex: 0
    }
  }

  componentDidMount() {
    const { header } = this.props
    if (header.fixed) {
      document.addEventListener('scroll', this.detector)
    }
  }

  componentWillUnmount() {
    const { header } = this.props
    if (header.fixed) {
      document.removeEventListener('scroll', this.detector)
    }
  }

  detector = () => {
    const { header, tableTree } = this.props
    if (tableTree.offsetTop <= window.pageYOffset + header.top) {
      const width = +window.getComputedStyle(tableTree).width.slice(0, -2)
      this.setState({ positionValue: 'fixed', width, zIndex: 10 })
    } else {
      this.setState({ positionValue: 'static', width: 'auto', zIndex: 0 })
    }
  }

  render() {
    const { columns, header } = this.props
    const { positionValue, width, zIndex } = this.state
    const headerStyle = { position: positionValue, top: header.top, width, zIndex }
    return (
      <div
        ref={hd => {
          this.header = hd
        }}
        style={headerStyle}
      >
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
      </div>
    )
  }
}

Header.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      textAlign: PropTypes.oneOf(['left', 'center', 'right']),
      width: PropTypes.string
    })
  ).isRequired,
  header: PropTypes.shape({
    fixed: PropTypes.bool.isRequired,
    top: PropTypes.number.isRequired
  }).isRequired,
  tableTree: PropTypes.object.isRequired
}

export default Header
