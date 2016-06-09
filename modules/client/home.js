import React from 'react'
import { render } from 'react-dom'
import { episodes } from '../PodcastInfo'
import Home from './components/Home'

render(
  <Home episodes={episodes}/>,
  document.getElementById('app')
)
