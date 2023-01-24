import * as pt from 'pareto-core-types'

export type TBoolean = boolean

export type TNull = null

export type TNumber = number

export type TPath = pt.Nested<string>

export type TString = string

export type FLog = ($: TString,) => void

export type FSignal = ($: TNull,) => void