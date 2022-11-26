import { Context } from 'koishi'
import majorData from './assets/major.json'

export default function apply(ctx: Context) {
    const major = ctx.command('major')

    major.action(async ({ session, next }) => {
      var i:number;
      var majorInfo:string = `The following contents are attached with experience sharing.\n`;
      for(i = 0; i < majorData.length; i++) {
          var info:string = `${majorData[i].infoName}\n${majorData[i].url}\n`
          majorInfo = `${majorInfo}\n${info}`
      }
      
      return majorInfo
    })
  }