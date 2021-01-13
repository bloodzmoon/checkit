import type Styles from '*.module.css'

/**
 * Function for join multiple CSS Modules classes
 *
 * @param styles Styles object from .module.css files
 * @param classesName Array of class name
 */
export function css(styles: typeof Styles, ...classesName: string[]) {
  return classesName
    .map((name) => styles[name])
    .filter((name) => name !== '')
    .join(' ')
}
