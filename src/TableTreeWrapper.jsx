import React from 'react'
import PropTypes from 'prop-types'
import memoize from 'memoize-one'
import TableTree from './TableTree'
import { dfs } from './utils'

const setNodeLevel = (datasets, rootId, listMap) => {
  const init = datasets.filter(n => n.parentId === rootId).map(m => listMap[m.id])
  const _dfs = (rootNode, nodeMap) => {
    const fn = (node, nodeLevel) => {
      node.__level = nodeLevel
      const sub = node.__sub
      if (sub && sub.length === 0) {
        return
      }
      const currNodeLevel = ++nodeLevel
      for (let i = 0; i < sub.length; i++) {
        fn(nodeMap[sub[i]], currNodeLevel)
      }
    }

    fn(rootNode, 1)
  }

  init.forEach(n => _dfs(n, listMap))
}

const initDatasetsTree = (datasets, rootId, datasetsMap) => {
  datasets.forEach(item => {
    if (item.parentId === rootId) {
      item.__display = true
    } else {
      item.__display = false
    }

    const tmp = []
    datasets.filter(d => item.id === d.parentId).forEach(m => tmp.push(m.id))
    item.__sub = tmp
    if (tmp.length > 0) {
      item.__iconPlus = true
      item.__leaf = false
    } else {
      item.__iconPlus = false
      item.__leaf = true
    }
  })
  const data = []
  datasets.filter(d => d.id === rootId).forEach(n => {
    dfs(n, datasetsMap, node => data.push(node))
  })
  return data
}

const genDatasetsMap = datasets => {
  const obj = {}
  datasets.forEach(dataset => {
    obj[dataset.id] = dataset
  })
  return obj
}

const init = (propsDatasets, propsRootId) => {
  const datasetsMap = genDatasetsMap(propsDatasets)
  const formatedDatasets = initDatasetsTree(propsDatasets, propsRootId, datasetsMap)
  setNodeLevel(formatedDatasets, propsRootId, datasetsMap)
  return { formatedDatasets, datasetsMap }
}

class TableTreeWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datasets: this.props.datasets
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.datasets && nextProps.datasets !== prevState.datasets) {
      return { datasets: nextProps.datasets }
    }
    return null
  }

  memoizeInit = memoize(init)

  render() {
    const { datasets } = this.state
    const { rootId, rowKey, columns, loading, total, header, style, className } = this.props
    const props = { rootId, rowKey, columns, loading, total, header, style, className }
    const { formatedDatasets, datasetsMap } = this.memoizeInit(datasets, rootId)
    return <TableTree {...props} datasets={formatedDatasets} datasetsMap={datasetsMap} />
  }
}

TableTreeWrapper.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      textAlign: PropTypes.oneOf(['left', 'center', 'right']),
      width: PropTypes.number,
      bodyRender: PropTypes.func
    })
  ),
  datasets: PropTypes.arrayOf(PropTypes.object),
  rowKey: PropTypes.string,
  rootId: PropTypes.number,
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  total: PropTypes.shape({
    visible: PropTypes.bool,
    name: PropTypes.string
  }),
  header: PropTypes.shape({
    fixed: PropTypes.bool,
    top: PropTypes.number
  }),
  style: PropTypes.object,
  className: PropTypes.string
}

TableTreeWrapper.defaultProps = {
  columns: [],
  datasets: [],
  rowKey: 'id',
  rootId: 0,
  loading: false,
  total: {
    visible: false,
    name: '合计数据'
  },
  header: {
    fixed: false,
    top: 0
  },
  style: {},
  className: ''
}

export default TableTreeWrapper
