import * as React from 'react'
import { View, SafeAreaView, Button, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

class UserProfileScreen extends React.Component {
  render() {
    const statusBarHeight = getStatusBarHeight()
    return (
      <View style={styles.container}>
        <View style={[styles.hero, { paddingTop: statusBarHeight }]}>
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
