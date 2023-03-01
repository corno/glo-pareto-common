import * as pt from 'pareto-core-types'

import { T   } from './types.generated'


export type IStringStreamConsumer = {
    'onData': ($: T.String, ) => void
    'onEnd': () => void
}

export type FLog = ($: T.String,) => void

export type FSignal = ($: T.Null,) => void