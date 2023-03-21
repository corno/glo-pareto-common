import * as pd from 'pareto-core-data'

import {
    nested,
    null_,
    typeReference,
    boolean,
    string,
    number,
    group,
    type,
    parametrizedType,
    member,
    typeParameter,
    dictionary,
    sInterfaceMethod,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({}),
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
    'asynchronous': {
        'interfaces': d({
        //     "StringStreamConsumer": streamconsumer(
        //         interfaceMethod(typeReference("String")),
        //         interfaceMethod(null),
        //     ),
        }),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
            "String": sInterfaceMethod(typeReference("String")),
            "Null": sInterfaceMethod(typeReference("Null")),
        }),
        'algorithms': d({}),
    },
}