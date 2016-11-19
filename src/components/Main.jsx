import React from 'react'
import NavBar from './NavBar.jsx'


const MainComponent = (props) => {
  console.log(props);
  return (
    <div> 
      <NavBar/>
      {props.children}
      <div id='footer-border'></div>
      <div id='footer'>
        <a href="https://www.facebook.com/mwongka"> facebook </a>
        <span> | </span>
        <a href="https://www.linkedin.com/in/michael-wong-004837120"> linkedin </a>
        <span> | </span>
        <a href="ttps://www.github.com/mwongka"> github </a>
      </div>
    </div>
    )
}

export default MainComponent