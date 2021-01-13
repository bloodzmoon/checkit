import styles from './Keyboard.module.css'
import { win } from '@lib'
import { Keyboard } from '@components'

export function KeyboardPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Keyboard role="keyboard" layout={win.keyboard} />
        <div className={styles.right}>
          <Keyboard role="extrakey" layout={win.extraKey} />
          <Keyboard role="extrakey" layout={win.arrowKey} />
        </div>
      </div>
    </div>
  )
}
