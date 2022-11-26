import { Context, Schema } from 'koishi'
import environment from './environment'

export const name = 'uni-envir'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  // write your plugin here
  ctx.plugin(environment)
}
