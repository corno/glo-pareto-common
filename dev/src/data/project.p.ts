import * as pr from "pareto-core-raw"
import {
    externalReference as er,
    string as str,
    nullType,
    type,
    reference as ref,
    boolean as bln,
    number as nr,
    nested,
} from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"
import { dictionary, group, member, taggedUnion, types, _function } from "lib-pareto-typescript-project/dist/modules/glossary/api/shorthands.p"


import { string, reference, externalReference, number, boolean } from "lib-pareto-typescript-project/dist/modules/api/api/shorthands.p"
import * as NProject from "lib-pareto-typescript-project/dist/modules/project"
const wd = pr.wrapRawDictionary


export const project: NProject.TProject = {
    'type': ["glossary", null],
    'modules': wd({
        "main": {
            'definition': {
                "glossary": {
                    'imports': wd({
                    }),
                    'types': types({
                        "Path": nested(str()),
                        "String": str(),
                        "Number": nr(),
                        "Boolean": bln(),
                    }),
                    'functions': wd({
                    }),
                    'callbacks': wd({
                    }),
                    'interfaces': wd({}),
                },
                "api": {
                    'imports': wd({
                    }),
                    'algorithms': wd({
                    })
                },
            },
            'implementation': {}

        },
    }),
    'main': "main"
}