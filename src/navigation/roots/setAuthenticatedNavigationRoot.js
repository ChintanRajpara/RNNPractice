import {Navigation} from 'react-native-navigation';
import {
  navigationLayoutsAndComponentIds,
  componentNames,
} from '../componentNames';
import bottomTabsIcons from '../../icons/bottomTabsIcons';

const {
  add_circle_icon,
  home_icon,
  notifications_icon,
  person_icon,
  search_icon,
} = bottomTabsIcons;

const iconColor = 'rgba(255,255,255,0.5)';
const selectedIconColor = '#fff'; //  '#FED834';

const setAuthenticatedNavigationRoot = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: navigationLayoutsAndComponentIds.BOTTOM_TABS_LAYOUT,
        children: [
          {
            stack: {
              id: navigationLayoutsAndComponentIds.HOME_TAB,
              children: [
                {
                  component: {
                    id: navigationLayoutsAndComponentIds.HOME_ROOT,
                    name: componentNames.HomeRoot,
                    options: {
                      topBar: {
                        visible: false,
                      },
                      bottomTabs: {
                        animate: true,
                        hideOnScroll: true,
                        drawBehind: true,
                      },
                    },
                  },
                },
              ],
              options: {
                topBar: {
                  visible: false,
                },
                bottomTabs: {
                  backgroundColor: 'rgba(0,0,0,0.3)',
                },
                bottomTab: {
                  text: 'Home',
                  icon: home_icon,
                  textColor: 'white',
                  selectedTextColor: '#FED834',
                  iconColor,
                  selectedIconColor,
                },
              },
            },
          },
          {
            stack: {
              id: navigationLayoutsAndComponentIds.SEARCH_TAB,
              children: [
                {
                  component: {
                    id: navigationLayoutsAndComponentIds.SEARCH_ROOT,
                    name: componentNames.SearchRoot,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Search',
                  icon: search_icon,
                  textColor: 'white',
                  selectedTextColor: '#FED834',
                  iconColor,
                  selectedIconColor,
                },
              },
            },
          },
          {
            stack: {
              id: navigationLayoutsAndComponentIds.CAMERA_TAB,
              children: [
                {
                  component: {
                    id: navigationLayoutsAndComponentIds.CAMERA_ROOT,
                    name: componentNames.CameraRoot,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Add',
                  icon: add_circle_icon,
                  textColor: 'white',
                  selectedTextColor: '#FED834',
                  iconColor,
                  selectedIconColor,
                },
              },
            },
          },
          {
            stack: {
              id: navigationLayoutsAndComponentIds.NOTIFICATION_TAB,
              children: [
                {
                  component: {
                    id: navigationLayoutsAndComponentIds.NOTIFICATION_ROOT,
                    name: componentNames.NotificationRoot,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Notification',
                  icon: notifications_icon,
                  textColor: 'white',
                  selectedTextColor: '#FED834',
                  iconColor,
                  selectedIconColor,
                },
              },
            },
          },
          {
            stack: {
              id: navigationLayoutsAndComponentIds.PROFILE_TAB,
              children: [
                {
                  component: {
                    id: navigationLayoutsAndComponentIds.PROFILE_ROOT,
                    name: componentNames.ProfileRoot,
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Profile',
                  icon: person_icon,
                  textColor: 'white',
                  selectedTextColor: '#FED834',
                  iconColor,
                  selectedIconColor,
                },
              },
            },
          },
        ],
        options: {
          navigationBar: {
            visible: false,
            backgroundColor: '#3c3c3c',
          },
          statusBar: {visible: false, style: 'light', drawBehind: true},
          bottomTabs: {
            tabsAttachMode: 'onSwitchToTab',
            animate: true,
            titleDisplayMode: 'alwaysHide',
            backgroundColor: '#3c3c3c',
          },
        },
      },
    },
  });
};

export default setAuthenticatedNavigationRoot;
