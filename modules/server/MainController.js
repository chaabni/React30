import RSS from 'rss'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { description, episodes } from '../PodcastInfo'
import HomePage from './components/HomePage'

const DOCTYPE = '<!DOCTYPE html>'

export const sendFeed = (req, res) => {
  const lastEpisode = episodes[episodes.length - 1]

  const feed = new RSS({
    generator: 'react30/1.0',
    title: 'React30',
    description: description,
    language: 'en',
    feed_url: 'https://react30.com/index.xml',
    site_url: 'https://react30.com',
    image_url: 'https://react30.com/React30.png',
    copyright: '2016 React30',
    categories: [ 'Technology' ],
    pubDate: lastEpisode.date,
    ttl: 60,
    custom_namespaces: {
      'itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd'
    },
    custom_elements: [
      { 'itunes:subtitle': 'A React.js podcast in 30 minutes' },
      { 'itunes:author': 'React Training' },
      { 'itunes:summary': description },
      { 'itunes:block': 'No' },
      { 'itunes:explicit': 'Clean' },
      { 'itunes:owner': [
        { 'itunes:name': 'React Training' },
        { 'itunes:email': 'react30podcast@gmail.com' }
      ]},
      { 'itunes:image': {
        _attr: { href: 'https://react30.com/React30.png' }
      }},
      { 'itunes:category': {
        _attr: { text: 'Technology' }
      }}
    ]
  })

  episodes.forEach(episode => {
    feed.item({
      title: episode.title,
      description: episode.description,
      url: 'https://react30.com',
      guid: `react30/${episode.id}`,
      date: episode.date,
      enclosure: {
        url: episode.rawURL,
        size: episode.size,
        type: episode.type
      },
      custom_elements: [
        { 'itunes:subtitle': episode.description },
        { 'itunes:author': 'React Training' },
        { 'itunes:explicit': 'Clean' },
        { 'itunes:block': 'No' },
        { 'itunes:duration': '00:30:00' }
      ]
    })
  })

  res.type('text/xml; charset=UTF-8')
     .send(feed.xml({ indent: true }))
}

export const sendHomePage = (req, res) => {
  const chunks = [ 'vendor', 'home' ]
  const props = {
    styles: req.bundle.getStyleAssets(chunks),
    scripts: req.bundle.getScriptAssets(chunks)
  }

  res.send(
    DOCTYPE + renderToStaticMarkup(<HomePage {...props}/>)
  )
}
