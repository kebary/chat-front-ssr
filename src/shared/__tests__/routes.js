import React from 'react'
import Routes from '../routes'
import { Route } from 'react-router-dom'
import { shallow } from 'enzyme'
import Home from '../components/pages/home/'

describe('Routes', () => {
  it('test', () => {
    const routes = shallow(<Routes bar='baz' />)
    expect(routes.contains(<Route component={Home} />)).toEqual(true)
  })
})
