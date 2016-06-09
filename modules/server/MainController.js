import RSS from 'rss'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import HomePage from './components/HomePage'

const DOCTYPE = '<!DOCTYPE html>'

const createDate = (s) =>
  new Date(Date.parse(s))

const PodcastDescription = 'A 30-minute podcast about JavaScript and all things React'
const PodcastEpisodes = [
  { id: '001',
    date: createDate('June 6, 2016'),
    title: 'Getting Into React',
    description: 'In this episode, we introduce ourselves, talk about the goals of React30, and discuss how each of us came to React',
    url: 'https://files.react30.com/001 React30 - Getting Into React.mp3',
    size: 21601323,
    type: 'audio/mpeg',
    iTunesURL: 'https://itunes.apple.com/us/podcast/001-react30-getting-into-react/id1121818347'
  }
]

export const sendFeed = (req, res) => {
  const lastEpisode = PodcastEpisodes[PodcastEpisodes.length - 1]
  const feed = new RSS({
    generator: 'react30/1.0',
    title: 'React30',
    description: PodcastDescription,
    feed_url: 'https://react30.com/index.xml',
    site_url: 'https://react30.com',
    image_url: 'https://react30.com/React30Square.png',
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
      { 'itunes:summary': PodcastDescription },
      { 'itunes:block': 'No' },
      { 'itunes:explicit': 'Clean' },
      { 'itunes:owner': [
        { 'itunes:name': 'React Training' },
        { 'itunes:email': 'react30podcast@gmail.com' }
      ]},
      { 'itunes:image': {
        _attr: { href: 'https://react30.com/React30Square.png' }
      }},
      {'itunes:category': {
        _attr: { text: 'Technology' }
      }},
      {'itunes:category': {
        _attr: { text: 'JavaScript' }
      }}
    ]
  })

  PodcastEpisodes.forEach(episode => {
    feed.item({
      title: episode.title,
      description: episode.description,
      url: 'https://react30.com',
      guid: `react30/${episode.id}`,
      date: episode.date,
      enclosure: {
        url: episode.url,
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
