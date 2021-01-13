import styles from './Mouse.module.css'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'
import { useMouse } from '@hooks'
import { css } from '@utils'

export function Mouse() {
  const {
    isLeft,
    isMiddle,
    isRight,
    isBtn3,
    isBtn4,
    wheel,
    position,
  } = useMouse()

  const left = css(styles, 'side', isLeft ? 'click' : '')
  const middle = css(styles, 'middle', isMiddle ? 'click' : '')
  const right = css(styles, 'side', isRight ? 'click' : '')
  const btn3 = css(styles, 'btn', 'btn3', isBtn3 ? 'click' : '')
  const btn4 = css(styles, 'btn', 'btn4', isBtn4 ? 'click' : '')
  const up = css(styles, 'arrow', 'up', wheel === 'up' ? 'wheel' : '')
  const down = css(styles, 'arrow', 'down', wheel === 'down' ? 'wheel' : '')

  return (
    <div className={styles.container}>
      {/* Mouse render */}
      <span className={styles.upper}>
        <span className={left} />
        <span className={middle} />
        <span className={right} />
      </span>
      <span className={styles.lower} />
      <span className={styles.cable} />

      {/* Left */}
      <div className={btn3} />
      <div className={btn4} />

      {/* Bottom */}
      <div className={styles.pos}>{`(${position.x}, ${position.y})`}</div>

      {/* Right */}
      <FiArrowUp size="48" className={up} />
      <FiArrowDown size="48" className={down} />
    </div>
  )
}
