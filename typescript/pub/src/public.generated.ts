import * as pt from 'pareto-core-types'

import { T } from './types.generated'


export namespace B {
    
    export type Null = ($: T.Null, ) => void
    
    export type String = ($: T.String, ) => void
}

export namespace C {
    
    export type Null = ($b: B.Null) => void
    
    export type String = ($b: B.String) => void
}

export namespace F {}