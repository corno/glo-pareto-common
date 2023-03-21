import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Null = ($: T.Null, ) => void
        
        export type String = ($: T.String, ) => void
    }
}