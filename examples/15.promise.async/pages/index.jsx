import { Page } from 'weact'

export default class extends Page {
  data = {
    who: '...'

  }
  onLoad() {
    const wait = new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve('你')
      }, 1000)
    })
    wait.then(res => this.setState({ who: res }))
  }
  render() {
    const { who } = this.date
    return (
      <view>
        等 { who }
      </view>
    )
  }
}
