import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './view/Root'
import { store } from './state'

render(
    <Router>
    <Root store={store} />
  </Router>,
    document.getElementById('root')
)
