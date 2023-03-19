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
    
    export namespace IW {
        
        export type Null = ($c: ($b: I.Null) => void) => void
        
        export type String = ($c: ($b: I.String) => void) => void
    }
    
    export namespace A {}
}