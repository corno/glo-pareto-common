import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {
        
        export type Null = ($: T.Null, ) => void
        
        export type Number = ($: T.Number, ) => void
        
        export type NumberStream = {
            'data': ($: T.Number, ) => void
            'end': () => void
        }
        
        export type String = ($: T.String, ) => void
        
        export type StringStream = {
            'data': ($: T.String, ) => void
            'end': () => void
        }
    }
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Null = ($: T.Null, ) => void
        
        export type Number = ($: T.Number, ) => void
        
        export type String = ($: T.String, ) => void
    }
}