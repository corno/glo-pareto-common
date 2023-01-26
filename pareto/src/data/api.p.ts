import * as pr from 'pareto-core-raw'
import {
    externalReference as er,
    string as str,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
    null_,
    typeReference,
    procedure,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/modules/moduleDefinition"

const d = pr.wrapRawDictionary


export const $: mmoduleDefinition.TModuleDefinition = {
    'glossary': {
        'imports': d({}),
        'parameters': d({}),
            'types': types({
                "Boolean": bln(),
                "Null": null_(),
                "Number": nr(),
                "Path": nested(str()),
                "String": str(),
            }),
            'interfaces': d({}),
        'functions': d({
            "Log": {
                'return type': ['nothing', null],
                'data': typeReference("String"),
                'managed input interface': null,
                'output interface': null,
            },

            "Signal": procedure(typeReference("Null"))
        }),
    },
    'api': {
        'imports': d({}),
        'algorithms': d({})
    },
}