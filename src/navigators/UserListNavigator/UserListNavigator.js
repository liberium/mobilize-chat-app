import { Dimensions } from 'react-native'
import { createDrawerNavigator } from 'react-navigation'
import { UserListScreen, UserProfileScreen } from 'screens'

const screenWidth = Dimensions.get('screen').width

const UserListNavigator = createDrawerNavigator(
  {
    UserList: UserListScreen
  },
  {
    initialRouteName: 'UserList',
    drawerPosition: 'right',
    drawerWidth: 0.9 * screenWidth,
    contentComponent: UserProfileScreen
  }
)

export default UserListNavigator
