import React, { useState } from 'react'
import Typewriter from 'typewriter-effect'
import './Home.css'

function Home() {
  const [state] = useState({
    title: 'Hi,',
    titleTwo: 'I`m',
    titleThree: 'Code&Coding',
    image: 'images/sp.png',
  })
  return (
    <div className="home">
      <div className="home-intro">
        <h2>
          <div className="title">{state.title}</div>
          <div className="titleTwo">{state.titleTwo}</div>
          <div className="titleThree">{state.titleThree}</div>
        </h2>

        <div className="text">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                'I`m a Youtube Channel',
                'I`m a web Developer',
                'I`m a Tecj Enthusiast',
              ],
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
