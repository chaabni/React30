import React from 'react'
import { render } from 'react-dom'
import * as PodcastInfo from '../PodcastInfo'
import Home from './components/Home'

render(
  <Home {...PodcastInfo}/>,
  document.getElementById('app')
)
