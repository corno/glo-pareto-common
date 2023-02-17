import * as pd from 'pareto-core-data'

import {
    nested,
    null_,
    typeReference,
    boolean,
    string,
    number,
    types,
    taggedUnion,
    group,
    func,
    method,
    type,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.wrapRawDictionary

export const $: mglossary.T.Glossary<string> = {
    'imports': d({}),
    'parameters': d({}),
    'types': d({
        "Boolean": type(boolean()),
        "Null": type(null_()),
        "Number": type(number()),
        "Path": type(nested(string())),
        "String": type(string()),
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