import * as React from 'react'
import { StatusBar, SafeAreaView, Button, StyleSheet } from 'react-native'

class UserListScreen extends React.Component {
  openDrawer = userId => {
    this.props.navigation.setParams({ userId })
    this.props.navigation.openDrawer()
  }

  render() {
    return (
      <React.Fragment>
        <StatusBar hidden={false} />
        <SafeAreaView style={styles.container}>
          <Button title="Go" onPress={() => this.openDrawer(1)} />
        </SafeAreaView>
      </React.Fragment>
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
