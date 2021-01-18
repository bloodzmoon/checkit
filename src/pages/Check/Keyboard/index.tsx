import styles from './Keyboard.module.css'
import { win } from '@lib'
import { Keyboard } from '@components'

export function KeyboardPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Keyboard layout={win.keyboard} />
        <div className={styles.right}>
          <Keyboard width="204px" layout={win.extraKey} />
          <Keyboard width="204px" layout={win.arrowKey} />
        </div>
      </div>
    </div>
  )
}
