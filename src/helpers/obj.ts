/**
 * This function converts the keys of an object from snake_case to camelCase
 * @param obj - The object to convert
 * @returns The converted object
 * @example snakeToCamelCase({ first_name: 'John', last_name: 'Doe' }) => { firstName: 'John', lastName: 'Doe' }
 */
export const snakeToCamelCase = (obj: any): any => {
  if (Array.isArray(obj)) return obj.map((v) => snakeToCamelCase(v))
  if (obj !== null && obj.constructor === Object) {
    return Object.keys(obj).reduce((result, key) => {
      const newKey = key.replace(/([-_][a-z])/gi, ($1) =>
        $1.toUpperCase().replace('-', '').replace('_', '')
      )
      const value = obj[key]
      const newValue = snakeToCamelCase(value)
      return { ...result, [newKey]: newValue }
    }, {})
  }
  return obj
}
