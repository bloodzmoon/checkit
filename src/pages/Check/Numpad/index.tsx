import styles from './Numpad.module.css'
import { Keyboard } from '@components'
import { win } from '@lib'

export function NumpadPage() {
  return (
    <div className={styles.page}>
      <Keyboard width="279px" layout={win.numpad} />
    </div>
  )
}
