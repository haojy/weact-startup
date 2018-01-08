import { Page, wx } from 'weact'

export default class extends Page {
  state = {
    storage: 'nothing',
  }

  onLoad() {
    console.info('[caniuse]', 'getStorage', wx.canIUse('openBluetoothAdapter'))

    wx.getStorage({ key: 'store' })
    .then(rs => {
      this.setState({ storage: rs})
    }, err => {
      this.setState({ storage: err.errMsg})
    })


  }
  render() {
    return (
      <view>
        Hello Promisify!
        <view>storage {storage}</view>
        
      </view>
    )
  }
}
