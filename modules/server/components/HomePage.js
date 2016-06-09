import React from 'react'
import { description } from '../../PodcastInfo'

const HomePage = (props = {}) => {
  const {
    title = 'React30',
    styles = [],
    scripts = []
  } = props

  return (
    <html>
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
        <meta name="timestamp" content={(new Date).toISOString()}/>
        <meta name="description" content={description}/>
        <title>{title}</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?react30"/>
        <script dangerouslySetInnerHTML={{ __html: "window.Promise || document.write('\\x3Cscript src=\"/es6-promise.min.js\">\\x3C/script>\\x3Cscript>ES6Promise.polyfill()\\x3C/script>')" }}/>
        <script dangerouslySetInnerHTML={{ __html: "window.fetch || document.write('\\x3Cscript src=\"/fetch.min.js\">\\x3C/script>')" }}/>
        {styles.map(s => <link rel="stylesheet" key={s} href={s}/>)}
      </head>
      <body>
        <div id="app"/>
        {scripts.map(s => <script key={s} src={s}/>)}
      </body>
    </html>
  )
}

export default HomePage
