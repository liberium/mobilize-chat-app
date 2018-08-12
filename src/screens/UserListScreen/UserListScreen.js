import * as React from 'react'
import { StatusBar, SafeAreaView, Button, StyleSheet } from 'react-native'

class UserListScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button title="Go" onPress={() => this.props.navigation.openDrawer()} />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(236, 240, 241)'
  }
})

export default UserListScreen
