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
    builderMethod,
    type,
    parametrizedType,
    member,
    typeParameter,
    dictionary,
    interfaceMethod,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'types': d({
        "Boolean": type(boolean()),
        "Null": type(null_()),
        "Number": type(number()),
        "Path": type(nested(string())),
        "String": type(string()),
        "AnnotatedDictionary": parametrizedType({ "Annotation": null, "Type": null }, group({
            "annotation": member(typeParameter("Annotation")),
            "dictionary": member(dictionary(typeParameter("Type"))),
        })),
        "AnnotatedKey": parametrizedType({ "Annotation": null }, group({
            "annotation": member(typeParameter("Annotation")),
            "key": member(string()),
        })),
        "AnnotatedReference": parametrizedType({ "Annotation": null, "ReferencedType": null }, group({
            "annotation": member(typeParameter("Annotation")),
            "referencedValue": member(typeParameter("ReferencedType")),
        })),
        "AnnotatedKeyReferencePair": parametrizedType({ "Annotation": null, "ReferencedType": null }, group({
            "annotation": member(typeParameter("Annotation")),
            "key": member(string()),
            "referencedValue": member(typeParameter("ReferencedType")),
        })),
    }),
    'builders': d({

    }),
    'interfaces': d({
        "StringStreamConsumer": ['group', {
            'members': d({
                "onData": interfaceMethod(typeReference("String")),
                "onEnd": interfaceMethod(null),
            }),
        }],
    }),
    'functions': d({
        "Log": func(typeReference("String"), null, null, null),
        "Signal": func(typeReference("Null"), null, null, null),
    }),
}