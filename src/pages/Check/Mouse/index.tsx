import styles from './Mouse.module.css'
import { Mouse } from '@components'

export function MousePage() {
  return (
    <div className={styles.page}>
      <Mouse />
    </div>
  )
}
