import xml from 'xml'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { description, episodes, TwitterURL, FeedURL } from '../PodcastInfo'
import HomePage from './components/HomePage'

const DOCTYPE = '<!DOCTYPE html>'

export const sendFeed = (req, res) => {
  const lastEpisode = episodes[episodes.length - 1]
  const generator = 'react30/1.0'

  const items = episodes.map(episode => ({
    item: [
      { title: `${episode.id} React30 - ${episode.title}` },
      { link: 'https://react30.com' },
      { pubDate: episode.date.toGMTString() },
      { 'dc:creator': 'React30' },
      { category: 'Technology' },
      { guid: [
        { _attr: {
          isPermalink: false
        }},
        `react30/${episode.id}`
      ]},
      { description: {
        _cdata: `<div><p>${episode.description}</p><p><a href="${TwitterURL}" title="Follow React30 on Twitter">Follow us on Twitter</a></p></div>`
      }},
      { 'content:encoded': {
        _cdata: `<div><p>${episode.description}</p><p><a href="${TwitterURL}" title="Follow React30 on Twitter">Follow us on Twitter</a></p></div>`
      }},
      { enclosure: [
        { _attr: {
          url: episode.audioURL,
          length: episode.size,
          type: episode.type
        }}
      ]},
      { 'itunes:subtitle': episode.description },
      { 'itunes:summary': episode.description },
      { 'itunes:author': 'React Training' },
      { 'itunes:explicit': 'Clean' },
      { 'itunes:block': 'No' },
      { 'itunes:duration': '00:30:00' }
    ]
  }))

  const feed = xml([
    { rss: [
      { _attr: {
        'xmlns:content': 'http://purl.org/rss/1.0/modules/content/',
        'xmlns:dc': 'http://purl.org/dc/elements/1.1/',
        'xmlns:atom': 'http://www.w3.org/2005/Atom',
        'xmlns:itunes': 'http://www.itunes.com/dtds/podcast-1.0.dtd',
        'xmlns:media': 'http://search.yahoo.com/mrss/',
        'version': '2.0'
      }},
      { channel: [
        { title: 'React30' },
        { 'atom:link': [
          { _attr: {
            href: FeedURL,
            rel: 'self',
            type: 'application/rss+xml'
          }}
        ]},
        { link: 'https://react30.com' },
        { description: description },
        { pubDate: lastEpisode.date.toGMTString() },
        { generator: generator },
        { language: 'en' },
        { copyright: '2016 React30' },
        { category: 'Technology' },
        { ttl: 60 },
        { 'itunes:subtitle': description },
        { 'itunes:summary': description },
        { 'itunes:author': 'React Training' },
        { 'itunes:category': [
          { _attr: {
            text: 'Technology'
          }}
        ]},
        { 'itunes:owner': [
          { 'itunes:name': 'React Training' },
          { 'itunes:email': 'react30podcast@gmail.com' }
        ]},
        { 'itunes:block': 'No' },
        { 'itunes:explicit': 'Clean' },
        { 'itunes:image': [
          { _attr: {
            href: 'https://react30.com/React30.png'
          }}
        ]},
        { image: [
          { url: 'https://react30.com/React30.png' },
          { title: 'React30' },
          { link: 'https://react30.com' },
          { width: 2048 },
          { height: 2048 }
        ]},
        ...items
      ]}
    ]}
  ])

  res.type('text/xml; charset=UTF-8').send(feed)
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
