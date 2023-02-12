import * as pt from 'pareto-core-types'


export namespace T {
    
    export type Boolean = boolean
    
    export type Null = null
    
    export type Number = number
    
    export namespace Path {
        
        export type N = string
    }
    
    export type Path = pt.Nested<string>
    
    export type String = string
}