import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {}
    
    export namespace C {}
    
    export namespace F {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Null = ($: T.Null, ) => void
        
        export type String = ($: T.String, ) => void
    }
    
    export namespace I2 {
        
        export type Null = ($b: I.Null) => void
        
        export type String = ($b: I.String) => void
    }
    
    export namespace I3 {
        
        export type Null = ($c: I2.Null) => void
        
        export type String = ($c: I2.String) => void
    }
    
    export namespace C {}
    
    export namespace C2 {}
    
    export namespace C3 {}
    
    export namespace F {}
}