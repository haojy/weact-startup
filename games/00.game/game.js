import { Game } from 'weact'
import './src/index'

export default class extends Game {

  networkTimeout = {
    request: 5000,
    connectSocket: 5000,
  }
  deviceOrientation = 'landscape'

}