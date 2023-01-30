import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as glossary } from "./glossary.p"

export const $: mproject.TProject = {
    'name': "glo-pareto-common",

    'author': "Corno",
    'description': "a pareto wrapper around the 'path' library of NodeJS",
    'license': "ISC",

    'pubdependencies': d({}),
    'type': ['glossary', {
        'glossary': glossary
    }],
}