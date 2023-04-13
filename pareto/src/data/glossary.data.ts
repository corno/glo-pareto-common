import * as pd from 'pareto-core-data'

import {
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
    array,
    optional,
    computed,
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
            "Computed": parametrizedType({ "Type": null }, computed(ref(typeParameter("Type")))),
            "Optional": parametrizedType({ "Type": null }, optional(ref(typeParameter("Type")))),
            "Array": parametrizedType({ "Type": null }, array(ref(typeParameter("Type")))),
            "Dictionary": parametrizedType({ "Type": null }, dictionary(ref(typeParameter("Type")))),
            "Number": type(number()),
            "Path": type(array(string())),
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
            "Number": aInterface(aInterfaceMethod(typeReference("Number"))),
            "String": aInterface(aInterfaceMethod(typeReference("String"))),
            "Null": aInterface(aInterfaceMethod(typeReference("Null"))),
            "StringStream": aInterface(streamconsumer(
                aInterfaceMethod(typeReference("String")),
                aInterfaceMethod(null),
            )),
            "NumberStream": aInterface(streamconsumer(
                aInterfaceMethod(typeReference("Number")),
                aInterfaceMethod(null),
            )),
        }),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
            "Number": sInterface(sInterfaceMethod(typeReference("Number"))),
            "String": sInterface(sInterfaceMethod(typeReference("String"))),
            "Null": sInterface(sInterfaceMethod(typeReference("Null"))),
        }),
        'algorithms': d({}),
    },
}