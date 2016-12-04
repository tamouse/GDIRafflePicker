import React from 'react'
import { shallow } from 'enzyme'
import NameList from './NameList'

it('renders NameList without crashing', ()=>{
  shallow(<NameList/>)
})
