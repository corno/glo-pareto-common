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
    parametrizedType,
    member,
    typeParameter,
    dictionary,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: mglossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({}),
    'parameters': d({}),
    'types': d({
        "Boolean": type(boolean()),
        "Null": type(null_()),
        "Number": type(number()),
        "Path": type(nested(string())),
        "String": type(string()),

        "AnnotatedDictionary": parametrizedType({ "Annotation": {}, "Type": {} }, group({
            "annotation": member(typeParameter("Annotation")),
            "dictionary": member(dictionary(typeParameter("Type"))),
        })),
        "AnnotatedKey": parametrizedType({ "Annotation": {} }, group({
            "annotation": member(typeParameter("Annotation")),
            "key": member(string()),
        })),
        "AnnotatedReference": parametrizedType({ "Annotation": {}, "ReferencedType": {} }, group({
            "annotation": member(typeParameter("Annotation")),
            "referencedValue": member(typeParameter("ReferencedType")),
        })),
        "AnnotatedKeyReferencePair": parametrizedType({ "Annotation": {}, "ReferencedType": {} }, group({
            "annotation": member(typeParameter("Annotation")),
            "key": member(string()),
            "referencedValue": member(typeParameter("ReferencedType")),
        })),
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