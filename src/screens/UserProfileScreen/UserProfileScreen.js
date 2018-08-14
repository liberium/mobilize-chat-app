import * as React from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

class UserProfileScreen extends React.Component {
  render() {
    const { userId } = this.props.navigation.state.routes[0].params || {}
    const statusBarHeight = getStatusBarHeight()
    return (
      <View style={styles.container}>
        <View style={[styles.hero, { paddingTop: statusBarHeight }]}>
          <Text>{userId}</Text>
          <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange'
  },
  hero: {
    height: 300,
    backgroundColor: 'yellow'
  }
})

export default UserProfileScreen
