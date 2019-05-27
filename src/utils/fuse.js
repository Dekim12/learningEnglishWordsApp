import * as Fuse from 'fuse.js'

const FuseConstructor = Fuse.default

const options = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['word', 'translation'],
}

const createFuse = (list) => {
  const fuse = new FuseConstructor(list, options)
  return fuse
}

export default createFuse
