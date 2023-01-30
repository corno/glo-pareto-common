import * as pt from 'pareto-core-types'


export namespace VOptional {
    
    export namespace Onot__set {}
    export type Onot__set<AType> = {}
}
export type VOptional<AType> = 
    | ['not set', VOptional.Onot__set<AType>]
    | ['set', AType]

export type MOptional<AType> = VOptional<AType>
export type UBoolean = boolean
export type UNull = null
export type UNumber = number

export namespace GPath {}
export type GPath = pt.Nested<string>
export type UPath = GPath
export type UString = string