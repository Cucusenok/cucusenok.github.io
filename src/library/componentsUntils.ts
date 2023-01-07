export const stringOrNumberCssPropertyTransform = (value: string | number | undefined, defaultValue: string): string => {
    return value ? (typeof value === "number" ? `${value}px` : value) : defaultValue
}