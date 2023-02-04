import * as pt from 'pareto-core-types'

import * as t from './types.generated'


export type TBoolean = t.UBoolean

export type TNull = t.UNull

export type TNumber = t.UNumber

export type TPath = t.UPath

export type TString = t.UString

export type IStringStreamConsumer = {
    'onData': ($: TString, ) => void
    'onEnd': () => void
}

export type FLog = ($: TString,) => void

export type FSignal = ($: TNull,) => void