const createDate = (s) =>
  new Date(Date.parse(s))

export const description = 'A 30-minute podcast about JavaScript and all things React'

export const episodes = [
  { id: '001',
    date: createDate('June 6, 2016'),
    title: 'Getting Into React',
    description: 'In this episode, we introduce ourselves, talk about the goals of React30, and discuss how each of us came to React',
    url: 'http://files.react30.com/001_React30_-_Getting_Into_React.mp3',
    size: 21601323,
    type: 'audio/mpeg',
    iTunesURL: 'https://itunes.apple.com/us/podcast/001-react30-getting-into-react/id1121818347'
  }
]
