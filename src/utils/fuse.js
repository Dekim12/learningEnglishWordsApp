import * as Fuse from 'fuse.js'

const options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['word', 'translation'],
}

export const createFuse = list => new Fuse(list, options)
// const result = fuse.search('домой')
