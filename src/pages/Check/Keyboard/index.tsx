import styles from './Keyboard.module.css'
import { keyboard } from '@lib'
import { Keyboard } from '@components'

export function KeyboardPage() {
  return (
    <div className={styles.page}>
      <Keyboard layout={keyboard} />
    </div>
  )
}
