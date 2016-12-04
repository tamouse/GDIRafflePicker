import React from 'react'
import { shallow } from 'enzyme'
import RightSideBar from './RightSideBar'

it('renders RightSideBar without crashing', () => {
  shallow(<RightSideBar/>)
})
