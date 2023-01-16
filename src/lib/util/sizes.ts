export type Size = 
    | 'xxs'
    | 'xs'
    | 's'
    | 'm'
    | 'l'
    | 'xl'
    | 'xxl'

export type SizeClassType = 'padding' | 'font-size'
export type SizeClass = `${SizeClassType}-${Size}`

export function getSizeClass(type: SizeClassType, size: Size): SizeClass {
    return `${type}-${size}`
}