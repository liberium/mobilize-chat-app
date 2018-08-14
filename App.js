import * as React from 'react'
import { Provider } from 'react-redux'
import { UserListNavigator } from '@navigators'
import store from '@store'

function App() {
  return (
    <Provider store={store}>
      <UserListNavigator />
    </Provider>
  )
}

export default App
