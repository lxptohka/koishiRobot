import { Context, Schema } from 'koishi'
import ranking from './ranking'

export const name = 'uni-ranking'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
  ctx.plugin(ranking)
}
