import React from 'react'
import PropTypes from 'prop-types'
import TableRow from './TableRow'
import Header from './Header'
import Footer from './Footer'
import styles from './TableTree.css'
import { dfs } from './utils'

class TableTree extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.datasets !== prevState.datasets) {
      return {
        datasets: nextProps.datasets,
        datasetsMap: nextProps.datasetsMap
      }
    }
    return null
  }

  constructor(props) {
    super(props)
    this.state = {
      datasets: this.props.datasets,
      datasetsMap: this.props.datasetsMap
    }
    this.tableTree = {}
  }

  handleExpandIconClick = rowId => {
    const { datasetsMap, datasets } = this.state
    const currentNode = datasetsMap[rowId]
    if (!currentNode.__leaf) {
      if (currentNode.__iconPlus === false) {
        currentNode.__iconPlus = true

        dfs(currentNode, datasetsMap, node => (node.__display = false))
        currentNode.__display = true
      } else {
        currentNode.__iconPlus = false
        const sub = currentNode.__sub
        sub.forEach(n => {
          const subNode = datasetsMap[n]
          subNode.__display = true
          if (subNode.__leaf === true) {
            subNode.__iconPlus = false
          } else {
            subNode.__iconPlus = true
          }
        })
      }
    }
    const list = datasets.slice()
    this.setState({ datasets: list })
  }

  render() {
    const { columns, rowKey, loading: Loading, total, rootId, header } = this.props
    const { datasets, datasetsMap } = this.state
    const list = datasets.filter(item => item.__display).map(n => datasetsMap[n.id])
    const rootDataset = datasetsMap[rootId]
    return (
      <div
        className={styles.layout}
        ref={tableTree => {
          this.tableTree = tableTree
        }}
      >
        <Header columns={columns} header={header} tableTree={this.tableTree} />
        {Loading ? (
          <Loading />
        ) : list.length === 0 ? (
          <div className={styles.row}>没有更多数据了</div>
        ) : (
          list.map((dataset, i) => {
            return (
              <TableRow
                key={i}
                columns={columns}
                dataset={dataset}
                rowKey={rowKey}
                handleExpandIconClick={this.handleExpandIconClick}
              />
            )
          })
        )}
        {total.visible && rootDataset ? <Footer total={total} columns={columns} dataset={rootDataset} /> : null}
      </div>
    )
  }
}

TableTree.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      textAlign: PropTypes.oneOf(['left', 'center', 'right']),
      bodyRender: PropTypes.func
    })
  ).isRequired,
  datasets: PropTypes.arrayOf(
    PropTypes.shape({
      __display: PropTypes.bool.isRequired,
      __iconPlus: PropTypes.bool.isRequired,
      __leaf: PropTypes.bool.isRequired,
      __sub: PropTypes.array.isRequired
    }).isRequired
  ),
  datasetsMap: PropTypes.object.isRequired,
  rowKey: PropTypes.string.isRequired,
  loading: PropTypes.oneOf([PropTypes.bool, PropTypes.element]).isRequired,
  rootId: PropTypes.number.isRequired,
  total: PropTypes.shape({
    visible: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  header: PropTypes.shape({
    fixed: PropTypes.bool.isRequired,
    top: PropTypes.number.isRequired
  }).isRequired
}

TableTree.defaultProps = {
  datasets: []
}

export default TableTree
