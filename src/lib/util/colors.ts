
export type SurfaceColor =
    | 'surface'
    | 'surface-inverted'
    | 'surface-secondary'
    | 'surface-primary'

export type TextColor = 
    | 'text'
    | 'text-inverted'
    | 'text-interactive'
    | 'text-disabled'

export type BaseColor = 
    | 'purple'
    | 'yellow'
    | 'pink'
    | 'cyan'
    | 'blue'
    | 'red'
    | 'white'
    | 'black'
    | 'transparent'

export type BrandColor =
    | 'primary'
    | 'secondary'
    | 'positive'
    | 'negative'
    | 'warning'

export type BorderColor = 'border'
   
export type OverlayColor = 'overlay'

export type AnyColor =
    | BrandColor
    | BaseColor
    | TextColor
    | SurfaceColor
    | BorderColor
    | OverlayColor


export type ColorVariation =
    | 'lighter'
    | 'lightest'
    | 'darker'
    | 'darkest'
    
export type AnyColorVariations =
    | AnyColor
    | `${AnyColor}-${ColorVariation}`

type ColorClass = `${ColorClassType}-${AnyColorVariations}`

type ColorClassBaseType = 'background' | 'text' | 'border';
type ColorClassModifier = 'hover' | 'disabled' | 'visited' | 'focused'
export type ColorClassType = ColorClassBaseType | `${ColorClassModifier}-${ColorClassBaseType}`

export function getColorClass(type: ColorClassType, color: AnyColor, variation?: ColorVariation): ColorClass {
    if (variation) {
        return `${type}-${color}-${variation}`
    } else {
        return `${type}-${color}`
    }
}