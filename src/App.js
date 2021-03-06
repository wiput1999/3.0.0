import React from 'react'
import { Router, Link } from 'react-static'
import { css } from 'glamor'
import glamorous from 'glamorous'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

css.global('html, body', tw('font-sans font-light text-base text-white m-0 p-0 bg-black'))
css.global('a', tw('no-underline text-react-blue'))

const Content = glamorous.div(tw('p-4'))

const App = () => (
  <Router>
    <div>
      <Content>
        <Routes />
      </Content>
      <Footer>
        React Bangkok 3.0.0
      </Footer>
    </div>
  </Router>
)

const Footer = glamorous.footer(tw('py-4 text-center opacity-50'))

export default hot(module)(App)
