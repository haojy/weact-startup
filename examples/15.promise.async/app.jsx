import { App } from 'weact'
import './pages/index.jsx'
import './pages/async.jsx'

export default class extends App {
  tabBar = {
    color: '#333333',
    selectedColor: '#0095d4',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        text: 'promise',
      },
      {
        pagePath: 'pages/async/async',
        text: 'async/await',
      },
    ],
  }
}