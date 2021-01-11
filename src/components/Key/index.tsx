import React from 'react'
import styles from './Key.module.css'
import { css } from '@utils'

type ModifiedHTMLProps = Omit<React.HTMLProps<HTMLSpanElement>, 'size'>

interface Props extends ModifiedHTMLProps {
  size?: '1' | '1.25' | '1.5' | '1.75' | '2.25' | '2.75' | '6.25'
}

export function Key({ children, size = '1' }: Props) {
  const sized = 'size' + size.replace('.', '-')
  const styled = css(styles, 'base', sized)

  return <span className={styled}>{children}</span>
}
