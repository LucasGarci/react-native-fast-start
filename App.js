/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react"
import { Root } from "./app/router.js"
import { Provider } from 'react-redux'
import { store } from './app/redux/store'

class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}
export default App