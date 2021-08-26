import React from 'react'
import { connect } from 'react-redux'
import { Home } from './Home'

const mapStateToProps = (state:any) => ({homePage: state.homePage})

const HomeContainer = connect(mapStateToProps, {})(Home)

export default HomeContainer;