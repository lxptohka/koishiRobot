import { Context, Schema } from 'koishi'
import major from './major'

export const name = 'uni-major'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
  ctx.plugin(major)
}
