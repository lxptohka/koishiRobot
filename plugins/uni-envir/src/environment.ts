import { Context } from 'koishi'
import envirData from './assets/environment.json'

export default function apply(ctx: Context) {
    const envir = ctx.command('environment')
  
    envir.action(async ({ session, next }) => {
        var i:number;
      var envirInfo:string = ``;
      for(i = 0; i < envirData.length; i++) {
          var msg:string = `${envirData[i].articleName}\n${envirData[i].url}\n`
          envirInfo = `${envirInfo}\n${msg}`
      }
      
      return envirInfo
      }
    )
  }