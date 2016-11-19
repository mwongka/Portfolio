import React from 'react'


const Bio = (props) => {
  console.log(props);
  return (
    <div id='bio'>
      <div id='coverphoto'><img className='coverphoto_img' src='./media/seattle_purple.png'></img></div>
      <div className='profile'> 
        <div id='profileImageBorder'><div id='profileImage'></div></div>
        <div className='profileInfo'>
          <h3>Michael Wong</h3>
          <h4>Software Engineer</h4>
          <p>San Francisco, CA | Seattle, WA</p>
          <div><a href='https://www.linkedin.com/in/michael-wong-004837120
    '>LinkedIn</a><span> | </span> <a href='https://www.github.com/mwongka'>GitHub</a>
          </div>
        </div>
      </div>

      <div id='spiel'>
        <div className='missionStatement'>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I am an energetic software engineer with a passion for creative design and a strong foundation in Javascript. As someone who loves overcoming challenges and problem solving, I enjoy building applications that solve real world problems and positively impacts the community around me.<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My mission as an effective developer, capable of making immediate positive contributions in a collaborative setting, is finding and working with teams that are equally passionate about creating quality, impactful products."</span>
        </div>
        <div className='educationAndTechnologies'>
          <div id='technolgies'>
            <div className='frontend'>
              <div id='frontend_logo'></div>
              <img src='./media/frontbuttons/JS_button.png'></img>
              <img src='./media/frontbuttons/React_button.png'></img>
              <img src='./media/frontbuttons/Angular_button.png'></img>
              <img src='./media/frontbuttons/Redux_button.png'></img>
              <img src='./media/frontbuttons/Jquery_button.png'></img>
              <img src='./media/frontbuttons/D3_button.png'></img>
              <img src='./media/frontbuttons/Electron_button.png'></img>
              <img src='./media/frontbuttons/HTML_button.png'></img>
              <img src='./media/frontbuttons/CSS_button.png'></img>
            </div>
            <div className='backend'>
              <div id='backend_logo'></div>
              <img src='./media/backbuttons/Node_button.png'></img>
              <img src='./media/backbuttons/PostgreSQL_button.png'></img>
              <img src='./media/backbuttons/Redis_button.png'></img>
              <img src='./media/backbuttons/MySQL_button.png'></img>
              <img src='./media/backbuttons/Sequelize_button.png'></img>
              <img src='./media/backbuttons/express_button.png'></img>
              <img src='./media/backbuttons/mongo_button.png'></img>
              <img src='./media/backbuttons/mongoose_button.png'></img>
            </div>
            <div className='devops'>
              <div id='devops_logo'></div>
              <img src='./media/backbuttons/docker_button.png'></img>
              <img src='./media/backbuttons/amazon_button.png'></img>
              <img src='./media/backbuttons/DO_button.png'></img>
              <img src='./media/backbuttons/heroku_button.png'></img>
              <img src='./media/backbuttons/webpack_button.png'></img>
              <img src='./media/backbuttons/babel_button.png'></img>
              <img src='./media/backbuttons/chai_button.png'></img>
              <img src='./media/backbuttons/git_button.png'></img>
            </div>
          </div>
          <div id='education_accomplishments'>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Bio