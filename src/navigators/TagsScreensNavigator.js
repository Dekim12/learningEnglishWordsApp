import { createStackNavigator, } from 'react-navigation'
import {
  TagDetailsContainer,
  TagsScreenContainer,
  EditTagContainer,
} from '../redux/containers'
import {
  ROOT_TAGS_SCREEN,
  TAG_DETAILS_SCREEN,
  EDIT_TAG_SCREEN,
  COMMON_STACK_NAVIGATOR_OPTIONS,
} from '../constants'

export const TagsScreensNavigator = createStackNavigator(
  {
    [ROOT_TAGS_SCREEN]: TagsScreenContainer,
    [TAG_DETAILS_SCREEN]: TagDetailsContainer,
    [EDIT_TAG_SCREEN]: EditTagContainer,
  },
  {
    defaultNavigationOptions: COMMON_STACK_NAVIGATOR_OPTIONS,
  }
)
