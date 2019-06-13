import { Navigation, } from 'react-native-navigation'
import {
  NEW_WORD_SCREEN,
  WORDS_DETAILS_SCREEN,
  EDIT_WORD_SCREEN,
  SETTINGS_SCREEN,
  STATISTIC_SCREEN,
  CURRENT_TASK_SCREEN,
  TAG_DETAILS_SCREEN,
  EDIT_TAG_SCREEN,
} from '../../constants'

export const goBack = componentId => Navigation.pop(componentId)

export const createNewWord = (componentId, word) => Navigation.push(componentId, {
  component: {
    name: NEW_WORD_SCREEN,
    passProps: {
      word,
    },
    options: {
      topBar: {
        subtitle: {
          text: 'New Word',
        },
      },
    },
  },
})

export const toEditWord = (componentId, id) => Navigation.push(componentId, {
  component: {
    name: EDIT_WORD_SCREEN,
    passProps: { id, },
    options: {
      topBar: {
        subtitle: {
          text: 'Edit Word',
        },
      },
    },
  },
})

export const toWordDescription = (componentId, id, word) => Navigation.push(componentId, {
  component: {
    name: WORDS_DETAILS_SCREEN,
    passProps: {
      id,
    },
    options: {
      topBar: {
        subtitle: {
          text: word[0].toUpperCase().concat(word.slice(1)),
        },
      },
    },
  },
})

export const toStatistic = componentId => Navigation.push(componentId, {
  component: {
    name: STATISTIC_SCREEN,
    options: {
      topBar: {
        subtitle: {
          text: 'Your Statistic',
        },
      },
    },
  },
})

export const toSettings = componentId => Navigation.push(componentId, {
  component: {
    name: SETTINGS_SCREEN,
    options: {
      topBar: {
        subtitle: {
          text: 'Tasks Settings',
        },
      },
    },
  },
})

export const openTask = (componentId, taskName) => Navigation.push(componentId, {
  component: {
    name: CURRENT_TASK_SCREEN,
    passProps: {
      taskName,
    },
    options: {
      topBar: {
        subtitle: {
          text: 'Task Performance',
        },
      },
    },
  },
})

export const toEditTag = (componentId, tagName) => Navigation.push(componentId, {
  component: {
    name: EDIT_TAG_SCREEN,
    passProps: {
      tagName,
    },
    options: {
      topBar: {
        subtitle: {
          text: 'Edit Tag',
        },
      },
    },
  },
})

export const toTagDetails = (componentId, tagName) => Navigation.push(componentId, {
  component: {
    name: TAG_DETAILS_SCREEN,
    passProps: {
      tagName,
    },
    options: {
      topBar: {
        subtitle: {
          text: tagName,
        },
      },
    },
  },
})
