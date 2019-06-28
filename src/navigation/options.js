export const defaultOptions = {
  topBar: {
    height: 50,
    visible: true,
    drawBehind: false,
    testID: 'topBar',
    subtitle: {
      fontSize: 30,
      fontFamily: 'FFF_Tusj',
      color: '#ffffff',
      alignment: 'center',
      largeTitle: true,
    },
    backButton: {
      color: '#ffffff',
      visible: true,
    },
    background: {
      color: '#100E17',
    },
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
  overlay: {
    interceptTouchOutside: true,
  },
}
