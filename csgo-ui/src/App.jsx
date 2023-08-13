import { useState } from 'react'
import Spinner from './components/spinner/Spinner';

import './assets/css/global.css'
import './assets/css/css_reset.css'
import './App.css'

function App() {

  return (
    <>
      <div id='main-layout-container'>
        <Spinner className={ "spinner" } />
      </div>
    </>
  )
}

export default App
