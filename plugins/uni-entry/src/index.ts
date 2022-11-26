import { Context, Schema } from 'koishi'
import entry from './entry'

export const name = 'uni-entry'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
  ctx.i18n.define("zh", require("./locales/zh"))
  ctx.plugin(entry)
}
