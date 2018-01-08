import { App } from 'weact'
import './pages/index.jsx'

export default class extends App {
  window = {
    navigationBarTitleText: 'Promisify wx API',
    navigationBarTextStyle: 'black',
    navigationBarBackgroundColor: '#f8f8f8',
    backgroundColor: '#efefef',
  }
}