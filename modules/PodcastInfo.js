const createDate = (s) =>
  new Date(Date.parse(s))

const byDateDescending = (a, b) =>
  b.date.getTime() - a.date.getTime()

export const description = 'A 30-minute podcast about React and all things JavaScript'

export const episodes = [
  { id: '001',
    date: createDate('June 6, 2016'),
    title: 'Getting Into React',
    description: 'In this episode, we introduce ourselves, talk about the goals of React30, and discuss how each of us came to React',
    audioURL: 'http://files.react30.com/001_React30_-_Getting_Into_React.mp3',
    iTunesURL: 'https://itunes.apple.com/us/podcast/001-react30-getting-into-react/id1121818347',
    YouTubeURL: 'https://www.youtube.com/watch?v=9IBFs5qkVAs',
    duration: '00:30:00',
    size: 21601323,
    type: 'audio/mpeg'
  },
  { id: '002',
    date: createDate('June 14, 2016'),
    title: 'Streaming React',
    description: 'Our guest in this episode is <a href="https://twitter.com/xander76">Sasha Aickin</a>, recently-retired CTO of Redfin and author of react-dom-stream and several pull requests that enable streaming rendering in React core',
    audioURL: 'http://files.react30.com/002_React30_-_Streaming_React.mp3',
    iTunesURL: 'https://itunes.apple.com/us/podcast/002-react30-streaming-react/id1121818347',
    YouTubeURL: 'https://www.youtube.com/watch?v=XW_c60NCkI4',
    duration: '00:30:00',
    size: 28801433,
    type: 'audio/mpeg'
  },
  { id: '003',
    date: createDate('June 24, 2016'),
    title: 'React Rally',
    description: 'Our guests in this episode are Jamison Dance and Matt Zabriskie, OSS contributors and organizers of React Rally',
    htmlDescription: 'Our guests in this episode are <a href="https://twitter.com/jergason">Jamison Dance</a> and <a href="https://twitter.com/mzabriskie">Matt Zabriskie</a>, OSS contributors and organizers of <a href="http://www.reactrally.com/">React Rally</a>',
    audioURL: 'http://files.react30.com/003_React30_React_Rally.mp3',
    YouTubeURL: 'https://www.youtube.com/watch?v=fwT9kHOkig8',
    duration: '00:30:45',
    size: 22150453,
    type: 'audio/mpeg'
  }
].sort(byDateDescending)

export const iTunesURL = 'http://itunes.apple.com/us/podcast/react30/id1121818347'
export const TwitterURL = 'https://twitter.com/React30'
export const YouTubeURL = 'https://www.youtube.com/channel/UCnyD10-edZmVsplCrF9eA6Q'
export const FeedURL = 'https://react30.com/index.xml'
