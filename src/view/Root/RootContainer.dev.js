import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevToolsContainer from '../DevTools'
import { Route } from 'react-router-dom'
import AppContainer from '../App'
import UserPageContainer from '../UserPage'
import RepoPageContainer from '../RepoPage'

const Root = ({ store }) => (
    <Provider store={store}>
    <div>
      <Route path="/" component={AppContainer} />
      <Route path="/:login/:name"
             component={RepoPageContainer} />
      <Route path="/:login"
             component={UserPageContainer} />
      <DevToolsContainer />
    </div>
  </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root
