import styles from './Keyboard.module.css'
import { IKeycap } from 'keycap'
import { Keycap } from '@components'
import { css } from '@utils'

interface Props {
  layout: IKeycap[]
  role?: 'keyboard' | 'extrakey'
}

export function Keyboard({ layout, role = 'keyboard' }: Props) {
  const styled = css(styles, 'layout', role)

  return (
    <div className={styled}>
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
