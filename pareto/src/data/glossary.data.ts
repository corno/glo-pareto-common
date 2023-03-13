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
    sfunc,
    builderMethod,
    type,
    parametrizedType,
    member,
    typeParameter,
    dictionary,
    interfaceMethod,
    stream,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
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
    'type': ['synchronous', {
        'builders': d({
            "String": builderMethod(typeReference("String")),
            "Null": builderMethod(typeReference("Null")),
        }),
        // 'interfaces': d({
        //     "StringStreamConsumer": stream(
        //         interfaceMethod(typeReference("String")),
        //         interfaceMethod(null),
        //     ),
        // }),
        'functions': d<g_glossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({
            // "Log": sfunc(typeReference("String"), null, null, null),
            // "Signal": sfunc(typeReference("Null"), null, null, null),
        }),

    }],
}