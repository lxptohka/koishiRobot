import { Context } from 'koishi'
import rankData from './assets/ranking.json'

export default function apply(ctx: Context) {
    const rank = ctx.command('ranking <rankname>')
  
    rank.action(async ({ session, next }, rankname) => {
      if (rankname === 'all') {
        var i:number;
      var rankInfo:string = ``;
      for(i = 0; i < rankData.length; i++) {
          var msg:string = `${rankData[i].rankName} ${rankData[i].info}\n${rankData[i].url}\n`
          rankInfo = `${rankInfo}\n${msg}`
      }
      return rankInfo
      } 
      else if (rankname === 'information') {
        var rankNameInfo:string = `The following is a list of rankings included in ranking table.\n`
        for (var i = 0; i < rankData.length; i++) {
          rankNameInfo = `${rankNameInfo}${rankData[i].rankName} ${rankData[i].info}\n`
        }
        return rankNameInfo
      } else {
        const rankReg = new RegExp(`.*${rankname}.*`)
        const rankInfo = rankData.find(item => rankReg.test(item.rankName))

        if (rankInfo) {
          const msg = `${rankInfo.rankName} ${rankInfo.info}\n${rankInfo.url}`
          return msg
        } else {
          return session.text('This ranking is not included in the ranking table.')
        }
      }
    })
  }