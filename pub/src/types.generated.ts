import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace AnnotatedDictionary {
        
        export type annotation<AAnnotation, AType> = AAnnotation
        
        export namespace dictionary {
            
            export type D<AAnnotation, AType> = AType
        }
        
        export type dictionary<AAnnotation, AType> = pt.Dictionary<AType>
    }
    
    export type AnnotatedDictionary<AAnnotation, AType> = {
        readonly 'annotation': AAnnotation
        readonly 'dictionary': pt.Dictionary<AType>
    }
    
    export namespace AnnotatedReference {
        
        export type annotation<AAnnotation, AReferencedType> = AAnnotation
        
        export type referencedValue<AAnnotation, AReferencedType> = AReferencedType
    }
    
    export type AnnotatedReference<AAnnotation, AReferencedType> = {
        readonly 'annotation': AAnnotation
        readonly 'referencedValue': AReferencedType
    }
    
    export namespace AnnotatedString {
        
        export type annotation<AAnnotation> = AAnnotation
        
        export type _lstring<AAnnotation> = string
    }
    
    export type AnnotatedString<AAnnotation> = {
        readonly 'annotation': AAnnotation
        readonly 'string': string
    }
    
    export namespace AnnotatedStringReferencePair {
        
        export type annotation<AAnnotation, AReferencedType> = AAnnotation
        
        export type referencedValue<AAnnotation, AReferencedType> = AReferencedType
        
        export type _lstring<AAnnotation, AReferencedType> = string
    }
    
    export type AnnotatedStringReferencePair<AAnnotation, AReferencedType> = {
        readonly 'annotation': AAnnotation
        readonly 'referencedValue': AReferencedType
        readonly 'string': string
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