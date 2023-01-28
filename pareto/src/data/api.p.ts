import * as pr from 'pareto-core-raw'

import {
    nested,
    null_,
    typeReference,
    procedure,
    boolean,
    string,
    number,
    types,
    _function,
    taggedUnion,
    parameter,
    group,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
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
        'interfaces': d({}),
        'functions': d({
            "Log": procedure(typeReference("String")),
            "Signal": procedure(typeReference("Null")),
        }),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({})
    },
}