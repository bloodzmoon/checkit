import styles from './Keycap.module.css'
import Key from 'keycap'
import { css } from '@utils'
import { useKeyPress } from '@hooks'

type ModifiedHTMLProps = Omit<React.HTMLProps<HTMLSpanElement>, 'size'>

interface Props extends ModifiedHTMLProps {
  code?: string
  size?: Key.size
  halfHeight?: boolean
  fn?: () => void
}

export function Keycap({
  children,
  code,
  size = '1',
  halfHeight = false,
  fn,
}: Props) {
  const isPressed = useKeyPress(code, fn)

  const sized = 'size' + size.replace('.', '-')
  const pressed = isPressed ? 'pressed' : ''
  const half = halfHeight ? 'half' : ''
  const styled = css(styles, 'base', sized, half, pressed)

  return <span className={styled}>{children}</span>
}
