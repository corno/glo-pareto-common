import * as pr from 'pareto-core-raw'

import {
    nested,
    null_,
    typeReference,
    boolean,
    string,
    number,
    types,
    taggedUnion,
    parameter,
    group,
    func,
    method,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pr.wrapRawDictionary

export const $: mglossary.TGlossary = {
    'imports': d({}),
    'parameters': d({}),
    'templates': d({
        "Optional": {
            'parameters': d({ "Type": {}, }),
            'type': taggedUnion({
                "set": parameter("Type"),
                "not set": group({}),
            })
        }
    }),
    'types': types({
        "Boolean": boolean(),
        "Null": null_(),
        "Number": number(),
        "Path": nested(string()),
        "String": string(),
    }),
    'interfaces': d({
        "StringStreamConsumer": ['group', {
            'members': d({
                "onData": method(typeReference("String")),
                "onEnd": method(null),
            }),
        }],
    }),
    'functions': d({
        "Log": func(typeReference("String"), null, null, null),
        "Signal": func(typeReference("Null"), null, null, null),
    }),
}