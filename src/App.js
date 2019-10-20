import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import { TweenMax, Power3 } from 'gsap';

function App() {
  let app = useRef(null);
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);

  const [state, setState] = useState(false);

  const handleExpand = e => {
    TweenMax.to(e.target, 0.8, {
      width: 200,
      height: 200,
      ease: Power3.easeOut
    });
    setState(true);
  };

  const handleShrink = e => {
    TweenMax.to(e.target, 0.8, {
      width: 75,
      height: 75,
      ease: Power3.easeOut
    });
    setState(false);
  };

  useEffect(() => {
    TweenMax.to(app.current, 0, { css: { visibility: 'visible' } });
    TweenMax.staggerFrom(
      [circle.current, circleRed.current, circleBlue.current],
      0.8,
      {
        opacity: 0,
        x: 40,
        ease: Power3.easeOut
      },
      0.2
    );
  }, []);

  return (
    <div ref={app} className='App'>
      <div className='App-header'>
        <div className='circle-container'>
          <div
            ref={circle}
            className='circle'
            onClick={state ? e => handleShrink(e) : e => handleExpand(e)}
          ></div>
          <div
            ref={circleRed}
            className='circle red'
            onClick={state ? e => handleShrink(e) : e => handleExpand(e)}
          ></div>
          <div
            ref={circleBlue}
            className='circle blue'
            onClick={state ? e => handleShrink(e) : e => handleExpand(e)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
