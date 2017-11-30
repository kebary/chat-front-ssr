import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { modules } from '../../..'

class Home extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  }
  componentDidMount () {
    this.props.login()
  }
  render () {
    return <div>home</div>
  }
}

export default connect(
  null,
  (dispatch) => {
    const {
      authenticate: { login }
    } = modules
    return bindActionCreators({ login }, dispatch)
  }
)(Home)
