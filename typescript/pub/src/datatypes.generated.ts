import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace AnnotatedDictionary {
        
        export type annotation<TAnnotation, TType> = TAnnotation
        
        export namespace dictionary {
            
            export type D<TAnnotation, TType> = TType
        }
        
        export type dictionary<TAnnotation, TType> = pt.Dictionary<TType>
    }
    
    export type AnnotatedDictionary<TAnnotation, TType> = {
        readonly 'annotation': TAnnotation
        readonly 'dictionary': pt.Dictionary<TType>
    }
    
    export namespace AnnotatedKey {
        
        export type annotation<TAnnotation> = TAnnotation
        
        export type key<TAnnotation> = string
    }
    
    export type AnnotatedKey<TAnnotation> = {
        readonly 'annotation': TAnnotation
        readonly 'key': string
    }
    
    export namespace AnnotatedKeyReferencePair {
        
        export type annotation<TAnnotation, TReferencedType> = TAnnotation
        
        export type key<TAnnotation, TReferencedType> = string
        
        export type referencedValue<TAnnotation, TReferencedType> = TReferencedType
    }
    
    export type AnnotatedKeyReferencePair<TAnnotation, TReferencedType> = {
        readonly 'annotation': TAnnotation
        readonly 'key': string
        readonly 'referencedValue': TReferencedType
    }
    
    export namespace AnnotatedReference {
        
        export type annotation<TAnnotation, TReferencedType> = TAnnotation
        
        export type referencedValue<TAnnotation, TReferencedType> = TReferencedType
    }
    
    export type AnnotatedReference<TAnnotation, TReferencedType> = {
        readonly 'annotation': TAnnotation
        readonly 'referencedValue': TReferencedType
    }
    
    export type Boolean = boolean
    
    export type Null = null
    
    export type Number = number
    
    export namespace Path {
        
        export type N = string
    }
    
    export type Path = pt.Nested<string>
    
    export type String = string
}