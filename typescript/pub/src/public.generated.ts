import * as pt from 'pareto-core-types'

import { T } from './types.generated'


export namespace I {
    
    export type StringStreamConsumer = {
        'data': ($: T.String, ) => void
        'end': () => void
    }
}

export namespace B {
    
    export type StringBuilder = ($: T.String, ) => void
}

export namespace F {
    
    export type Log = ($: T.String,) => void
    
    export type Signal = ($: T.Null,) => void
}