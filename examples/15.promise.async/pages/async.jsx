import { Page } from 'weact'

export default class extends Page {
  data = {
    who: ''

  }
  async onLoad() {
    const wait = () => new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve('你')
      }, 1000)
    })
    let who = await wait()
    console.info(who)
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
