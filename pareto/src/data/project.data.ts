import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as glossary } from "./glossary.data"

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "a pareto wrapper around the 'path' library of NodeJS",
    'license': "TBD",

    'dependencies': d({}),
    'type': ['glossary', {
        'root': glossary,
        'imports': d({}),
    }],
}