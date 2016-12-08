import React from 'react'
import { shallow } from 'enzyme'
import WinnerList from './WinnerList'

it('renders WinnerList without crashing', () => {
  shallow(<WinnerList/>)
})
