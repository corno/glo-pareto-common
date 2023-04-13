import * as pt from 'pareto-core-types'


export namespace N {}

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
    
    export namespace Array {
        
        export type A<TType> = TType
    }
    
    export type Array<TType> = pt.Array<TType>
    
    export type Boolean = boolean
    
    export namespace Computed {
        
        export type C<TType> = TType
    }
    
    export type Computed<TType> = () => TType
    
    export namespace Dictionary {
        
        export type D<TType> = TType
    }
    
    export type Dictionary<TType> = pt.Dictionary<TType>
    
    export type Null = null
    
    export type Number = number
    
    export namespace Optional {
        
        export type O<TType> = TType
    }
    
    export type Optional<TType> = [ false ] | [ true, TType]
    
    export namespace Path {
        
        export type A = string
    }
    
    export type Path = pt.Array<string>
    
    export type String = string
}