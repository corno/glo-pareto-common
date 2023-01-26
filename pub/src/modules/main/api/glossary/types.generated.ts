import * as pt from 'pareto-core-types'

export type UBoolean = boolean
export type UNull = null
export type UNumber = number

export namespace GPath {}
export type GPath = pt.Nested<string>
export type UPath = GPath
export type UString = string