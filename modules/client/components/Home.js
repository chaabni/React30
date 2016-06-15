import React from 'react'
import React30Logo from './React30Logo'
import TwitterLogo from './TwitterLogo'
import DateBox from './DateBox'
import './Home.css'

const Home = (props = {}) => {
  const {
    episodes = [],
    iTunesURL = '',
    TwitterURL = '',
    YouTubeURL = '',
    FeedURL = ''
  } = props

  const episodeItems = episodes.map(episode => (
    <li key={episode.id}>
      <div className="episode-date">
        <DateBox date={episode.date}/>
      </div>
      <div className="episode-info">
        <h2>
          <a
            href={episode.iTunesURL || episode.YouTubeURL || episode.audioURL}
            title={`Episode ${episode.id} - ${episode.title}`}
          >{episode.id} &mdash; {episode.title}</a>
        </h2>
        <p>{episode.description}</p>
      </div>
      <div className="episode-links">
        {episode.iTunesURL && <div className="episode-itunes-link">
          <a
            href={episode.iTunesURL}
            title={`Listen to episode ${episode.id} - ${episode.title} on iTunes`}
          >iTunes</a>
        </div>}
        {episode.YouTubeURL && <div className="episode-youtube-link">
          <a
            href={episode.YouTubeURL}
            title={`Watch episode ${episode.id} - ${episode.title} on YouTube`}
          >YouTube</a>
        </div>}
        {episode.audioURL && <div className="episode-mp3-link">
          <a
            href={episode.audioURL}
            title={`Listen to episode ${episode.id} - ${episode.title}`}
          >mp3</a>
        </div>}
      </div>
    </li>
  ))

  return (
    <div className="home">
      <section className="home-content">
        <div className="react30-logo">
          <React30Logo/>
        </div>
        <nav>
          <ul>
            <li><a href={iTunesURL} title="Subscribe to React30 on iTunes">iTunes</a></li>
            <li><a href={YouTubeURL} title="Subscribe to React30 on YouTube">YouTube</a></li>
            <li><a href={FeedURL} title="Subscribe to React30 via RSS">RSS</a></li>
            <li><a href={TwitterURL} title="Follow React30 on Twitter">Twitter</a></li>
          </ul>
        </nav>
        <ol className="episode-list">{episodeItems}</ol>
      </section>
      <footer className="home-footer">
        <div className="twitter-logo">
          <a href={TwitterURL} title="Follow React30 on Twitter">
            <TwitterLogo/>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Home
