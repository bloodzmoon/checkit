import styles from './Keyboard.module.css'
import { IKeycap } from 'keycap'
import { Keycap } from '@components'

interface Props {
  layout: IKeycap[]
}

export function Keyboard({ layout }: Props) {
  return (
    <div className={styles.layout}>
      {layout.map(({ text, size, halfHeight, code, fn }, index) => (
        <Keycap
          key={index}
          code={code}
          size={size}
          halfHeight={halfHeight}
          fn={fn}
        >
          {text}
        </Keycap>
      ))}
    </div>
  )
}
