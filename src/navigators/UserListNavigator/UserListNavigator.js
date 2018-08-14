import * as React from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import { UserListScreen, UserProfileScreen } from '@screens'

const screenWidth = Dimensions.get('screen').width

const UserListNavigator = createDrawerNavigator(
  { UserList: UserListScreen },
  {
    initialRouteName: 'UserList',
    drawerPosition: 'right',
    drawerWidth: 0.9 * screenWidth,
    contentComponent: ({ navigation }) => <UserProfileScreen navigation={navigation} />
  }
)

export default UserListNavigator
