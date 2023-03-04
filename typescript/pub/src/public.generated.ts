import * as pt from 'pareto-core-types'

import { T } from './types.generated'


export namespace I {}

export namespace B {
    
    export type StringStreamConsumer = {
        'onData': ($: T.String, ) => void
        'onEnd': () => void
    }
}

export namespace F {
    
    export type Log = ($: T.String,) => void
    
    export type Signal = ($: T.Null,) => void
}