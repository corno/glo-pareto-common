import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.wrapRawDictionary

import { $ as glossary } from "./glossary.data"

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "a pareto wrapper around the 'path' library of NodeJS",
    'license': "ISC",

    'dependencies': d({}),
    'type': ['glossary', {
        'glossary': glossary
    }],
}