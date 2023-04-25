import React from 'react'
import {Link} from 'react-router-dom'
import Wrapper from '../components/shared/Wrapper'
function About() {
  return (
    <Wrapper>
    <div className='about'>
        <h2>About this project.</h2>
        <p>React App to manage your shopping list.</p>
    </div>
    <br></br>
    <br />
    <p>
        <Link to="/">Back To Home</Link>
    </p>
    </Wrapper>
  )
}

export default About