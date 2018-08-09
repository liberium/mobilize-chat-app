import * as React from 'react'
import { StatusBar } from 'react-native'
import { UserListNavigator } from 'navigators'

function App() {
  return (
    <React.Fragment>
      <StatusBar hidden={false} />
      <UserListNavigator />
    </React.Fragment>
  )
}

export default App
