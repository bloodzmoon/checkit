import styles from './Keyboard.module.css'
import { IKeycap } from 'keycap'
import { Keycap } from '@components'
import { css } from '@utils'

interface Props {
  layout: IKeycap[]
  width?: string
}

export function Keyboard({ layout, width = '1012px' }: Props) {
  const styled = css(styles, 'layout')

  return (
    <div className={styled} style={{ width }}>
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
