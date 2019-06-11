export const defaultOptions = {
  topBar: {
    height: 50,
    visible: true,
    hideOnScroll: true,
    drawBehind: false,
    testID: 'topBar',
    subtitle: {
      text: 'Subtitle',
      fontSize: 27,
      color: '#ffffff',
      alignment: 'center',
    },
    backButton: {
      color: '#ffffff',
      visible: true,
    },
    background: {
      color: '#100E17',
    },
  },
  statusBar: {
    visible: true,
    style: 'light',
  },
  layout: {
    direction: 'ltr',
    backgroundColor: '#ffffff',
    orientation: ['portrait', 'landscape'],
  },
  bottomTabs: {
    animate: false,
    currentTabId: 'currentTabId',
    testID: 'bottomTabsTestID',
    drawBehind: false,
    backgroundColor: '#100E17',
    titleDisplayMode: 'alwaysShow',
  },
  bottomTab: {
    textColor: '#ffffff',
    selectedTextColor: '#FF4F1B',
    iconColor: '#ffffff',
    selectedIconColor: '#FF4F1B',
    fontSize: 14,
    selectedFontSize: 18,
    fontFamily: 'Norwester',
  },
}
