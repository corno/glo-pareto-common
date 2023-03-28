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
    aInterfaceMethod,
    streamconsumer,
    ref,
    aInterface,
    sInterface,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({}),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Boolean": type(boolean()),
            "Null": type(null_()),
            "Dictionary": parametrizedType({ "Type": null }, dictionary(ref(typeParameter("Type")))),
            "Number": type(number()),
            "Path": type(nested(string())),
            "String": type(string()),
            "AnnotatedDictionary": parametrizedType({ "Annotation": null, "Type": null }, group({
                "annotation": member(ref(typeParameter("Annotation"))),
                "dictionary": member(dictionary(ref(typeParameter("Type")))),
            })),
            "AnnotatedKey": parametrizedType({ "Annotation": null }, group({
                "annotation": member(ref(typeParameter("Annotation"))),
                "key": member(string()),
            })),
            "AnnotatedReference": parametrizedType({ "Annotation": null, "ReferencedType": null }, group({
                "annotation": member(ref(typeParameter("Annotation"))),
                "referencedValue": member(ref(typeParameter("ReferencedType"))),
            })),
            "AnnotatedKeyReferencePair": parametrizedType({ "Annotation": null, "ReferencedType": null }, group({
                "annotation": member(ref(typeParameter("Annotation"))),
                "key": member(string()),
                "referencedValue": member(ref(typeParameter("ReferencedType"))),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({
            "String": aInterface(aInterfaceMethod(typeReference("String"))),
            "Null": aInterface(aInterfaceMethod(typeReference("Null"))),
            "StringStream": aInterface(streamconsumer(
                aInterfaceMethod(typeReference("String")),
                aInterfaceMethod(null),
            )),
        }),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
            "String": sInterface(sInterfaceMethod(typeReference("String"))),
            "Null": sInterface(sInterfaceMethod(typeReference("Null"))),
        }),
        'algorithms': d({}),
    },
}