import React, {Component} from 'react' 
import {render} from 'react-dom'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import MainComponent from './components/Main.jsx'
import Squirrel from './components/Squirrel.jsx'
import Memly from './components/Memly.jsx'
import Crumbs from './components/Crumbs.jsx'
import More from './components/More.jsx'
import Bio from './components/Bio.jsx'

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={MainComponent}>
      <IndexRoute component={Bio}/>
      <Route path='squirrel' component={Squirrel}/>
      <Route path='memly' component={Memly}/>
      <Route path='crumbs' component={Crumbs}/>
      <Route path='more' component={More}/>
    </Route>
  </Router>
  )


render(routes, document.getElementById('app'));
