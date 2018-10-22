import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TableTreeWrapper from '../src/TableTreeWrapper.jsx'

Enzyme.configure({ adapter: new Adapter() })

describe('TableTreeWrapper', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<TableTreeWrapper />)
    expect(wrapper).toMatchSnapshot()
  })
})
