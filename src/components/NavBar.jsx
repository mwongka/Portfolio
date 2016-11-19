import React from 'react'
import {Link, IndexLink} from 'react-router'

class NavBar extends React.Component {
  constructor(props){
      super(props);
  }

  render() {
    return (
      <div id="nav">
        <div id="title"></div>
        <div id="trapezoid"></div>
        <div id="buttons">
          <IndexLink to='/' className="navButton"> BIO </IndexLink>
          <Link to='/squirrel' className="navButton"> SQUIRREL </Link>
          <Link to='/memly' className="navButton"> MEMLY </Link>
          <Link to='/crumbs' className="navButton"> CRUMBS </Link>
          <Link to='/more' className="navButton"> MORE </Link>
        </div>
      </div>)
  }
}

export default NavBar