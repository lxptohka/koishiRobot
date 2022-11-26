import { Context } from 'koishi'
import uniData from './assets/ratio.json'

export default function apply(ctx: Context) {
  const uni = ctx.command('admission <uniName>')

  uni.action(async ({ session, next }, uniName) => {

    if (!uniName.length) {
      return session.text('.plz-enter-name')
    }

    if (uniName === 'information') {
      var uniNameInfo:string = `The following is a list of universities included in admission function:\n`;
      for (var i = 0; i < uniData.length; i++) {
        uniNameInfo = `${uniNameInfo}${uniData[i].uniName}\n`
      }
      
      return uniNameInfo
    }

    const uniReg = new RegExp(`.*${uniName}.*`)
    const schoolInfo = uniData.find(item => uniReg.test(item.uniName))

    if (schoolInfo && schoolInfo.description.length) {
      const msg = `${schoolInfo.description}\n${schoolInfo.url}`
      return msg
    } else {
      return session.text('The admission website of the university is not included or published. \nOr you can enter the full name of the university and try again.')
    }
  })
}
