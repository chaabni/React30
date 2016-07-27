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
    descriptionHTML: 'In this episode, we introduce ourselves, talk about the goals of <a href="https://twitter.com/react30">React30</a>, and discuss how each of us came to <a href="https://facebook.github.io/react">React</a>',
    audioURL: 'http://files.react30.com/001_React30_Getting_Into_React.mp3',
    YouTubeURL: 'https://www.youtube.com/watch?v=9IBFs5qkVAs',
    duration: '00:30:00',
    size: 21601323,
    type: 'audio/mpeg'
  },
  { id: '002',
    date: createDate('June 14, 2016'),
    title: 'Streaming React',
    description: 'Our guest in this episode is Sasha Aickin, recently-retired CTO of Redfin and author of react-dom-stream and several pull requests that enable streaming rendering in React core',
    descriptionHTML: 'Our guest in this episode is <a href="https://twitter.com/xander76">Sasha Aickin</a>, recently-retired CTO of Redfin and author of <a href="https://www.npmjs.com/package/react-dom-stream">react-dom-stream</a> and several pull requests that enable streaming rendering in React core',
    audioURL: 'http://files.react30.com/002_React30_Streaming_React.mp3',
    YouTubeURL: 'https://www.youtube.com/watch?v=XW_c60NCkI4',
    duration: '00:30:00',
    size: 28801433,
    type: 'audio/mpeg'
  },
  { id: '003',
    date: createDate('June 24, 2016'),
    title: 'React Rally',
    description: 'Our guests in this episode are Jamison Dance and Matt Zabriskie, OSS contributors and organizers of React Rally',
    descriptionHTML: 'Our guests in this episode are <a href="https://twitter.com/jergason">Jamison Dance</a> and <a href="https://twitter.com/mzabriskie">Matt Zabriskie</a>, OSS contributors and organizers of <a href="http://www.reactrally.com/">React Rally</a>',
    audioURL: 'http://files.react30.com/003_React30_React_Rally.mp3',
    YouTubeURL: 'https://www.youtube.com/watch?v=fwT9kHOkig8',
    duration: '00:30:45',
    size: 22150453,
    type: 'audio/mpeg'
  },
  { id: '004',
    date: createDate('June 29, 2016'),
    title: 'React Hardware',
    description: 'In this episode we explore the possibilities of using React components to control real hardware components with the author of react-hardware, Dustan Kasten',
    descriptionHTML: 'In this episode we explore the possibilities of using React components to control real hardware components with the author of <a href="https://github.com/iamdustan/react-hardware">react-hardware</a>, <a href="https://twitter.com/iamdustan">Dustan Kasten</a>',
    audioURL: 'http://files.react30.com/004_React30_React_Hardware.mp3',
    YouTubeURL: 'https://www.youtube.com/watch?v=-p3nbKf11zQ',
    duration: '00:31:29',
    size: 22673636,
    type: 'audio/mpeg'
  },
  { id: '005',
    date: createDate('July 7, 2016'),
    title: 'Preact',
    description: 'Preact is a fast, tiny alternative to React that shares its ES6 API. In this episode, we chat with the author of Preact, Jason Miller',
    descriptionHTML: '<a href="https://preactjs.com/">Preact</a> is a fast, tiny alternative to React that shares its ES6 API. In this episode, we chat with the author of Preact, <a href="https://twitter.com/_developit">Jason Miller</a>',
    audioURL: 'http://files.react30.com/005_React30_Preact.mp3',
    YouTubeURL: 'https://www.youtube.com/watch?v=ETjTVV4qGoY',
    duration: '00:30:50',
    size: 22201543,
    type: 'audio/mpeg'
  },
  { id: '006',
    date: createDate('July 13, 2016'),
    title: 'Origins of React',
    description: 'In this episode we chat with Jordan Walke, the creator of React, about how it came to be',
    descriptionHTML: 'In this episode we chat with <a href="https://twitter.com/jordwalke">Jordan Walke</a>, the creator of <a href="https://facebook.github.io/react">React</a>, about how it came to be',
    audioURL: 'http://files.react30.com/006_React30_Origins_of_React.mp3',
    YouTubeURL: 'https://www.youtube.com/watch?v=yiCnfJ1rflI',
    duration: '00:33:16',
    size: 23951026,
    type: 'audio/mpeg'
  },
  { id: '007',
    date: createDate('July 19, 2016'),
    title: 'Enzyme',
    description: 'Enzyme is a helper for testing React components that provides a jQuery-like interface to traversing virtual DOM hierarchies. In this episode, we sit down with its author, Leland Richardson',
    descriptionHTML: '<a href="https://github.com/airbnb/enzyme">Enzyme</a> is a helper for testing React components that provides a jQuery-like interface to traversing virtual DOM hierarchies. In this episode, we sit down with its author, <a href="https://twitter.com/intelligibabble">Leland Richardson</a>',
    audioURL: 'http://files.react30.com/007_React30_Testing_React_with_Enzyme.mp3',
    YouTubeURL: 'https://www.youtube.com/watch?v=bYKM9i0TDQA',
    duration: '00:31:01',
    size: 22338235,
    type: 'audio/mpeg'
  },
  { id: '008',
    date: createDate('July 26, 2016'),
    title: 'Draft.js Plugins',
    description: 'Draft.js Plugins is a React community effort to create a set of high-quality plugins for Draft.js, the rich text editor framework for React, built by our guest Nik Graf',
    descriptionHTML: '<a href="https://www.draft-js-plugins.com/">Draft.js Plugins</a> is a React community effort to create a set of high-quality plugins for <a href="https://facebook.github.io/draft-js/">Draft.js</a>, the rich text editor framework for React, built by our guest <a href="https://twitter.com/nikgraf">Nik Graf</a>',
    audioURL: 'http://files.react30.com/008_React30_Draft_js_Plugins.mp3',
    YouTubeURL: 'https://www.youtube.com/watch?v=w-PqnpMizcQ',
    duration: '00:33:19',
    size: 23997106,
    type: 'audio/mpeg'
  }
].sort(byDateDescending)

export const FriendsURL = 'https://twitter.com/React30/lists/super-friends/members'
export const iTunesURL = 'http://itunes.apple.com/us/podcast/react30/id1121818347'
export const TwitterURL = 'https://twitter.com/React30'
export const YouTubeURL = 'https://www.youtube.com/channel/UCnyD10-edZmVsplCrF9eA6Q'
export const FeedURL = 'https://react30.com/index.xml'
