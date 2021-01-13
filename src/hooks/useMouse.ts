import { useState, useEffect } from 'react'

const LEFT_CLICK = 0
const MIDDLE_CLICK = 1
const RIGHT_CLICK = 2
const BUTTON_3 = 3
const BUTTON_4 = 4
type Position = { x: number; y: number }
type Wheel = '' | 'up' | 'down'

/**
 * Custom hooks to listen to mouse event
 * all button click, mouse wheel and also track
 * position of the mouse
 */
export function useMouse() {
  const [isLeft, setIsLeft] = useState<boolean>(false)
  const [isRight, setIsRight] = useState<boolean>(false)
  const [isMiddle, setIsMiddle] = useState<boolean>(false)
  const [isBtn3, setIsBtn3] = useState<boolean>(false)
  const [isBtn4, setIsBtn4] = useState<boolean>(false)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [wheel, setWheel] = useState<Wheel>('')

  const downHandler = (e: MouseEvent) => {
    e.preventDefault()
    switch (e.button) {
      case LEFT_CLICK:
        setIsLeft(true)
        break
      case RIGHT_CLICK:
        setIsRight(true)
        break
      case MIDDLE_CLICK:
        setIsMiddle(true)
        break
      case BUTTON_3:
        setIsBtn3(true)
        break
      case BUTTON_4:
        setIsBtn4(true)
        break
    }
  }

  const upHandler = (e: MouseEvent) => {
    e.preventDefault()
    switch (e.button) {
      case LEFT_CLICK:
        setIsLeft(false)
        break
      case RIGHT_CLICK:
        setIsRight(false)
        break
      case MIDDLE_CLICK:
        setIsMiddle(false)
        break
      case BUTTON_3:
        setIsBtn3(false)
        break
      case BUTTON_4:
        setIsBtn4(false)
        break
    }
  }

  const wheelHandler = (e: Event) => {
    const event = e as WheelEvent
    clearTimeout()
    if (event.deltaY < 0) {
      setWheel('up')
      setTimeout(() => setWheel(''), 150)
    } else if (event.deltaY > 0) {
      setWheel('down')
      setTimeout(() => setWheel(''), 150)
    } else setWheel('')
  }

  const moveHandler = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const disableRightClick = (e: MouseEvent) => {
    e.preventDefault()
    return false
  }

  useEffect(() => {
    window.addEventListener('mousedown', downHandler)
    window.addEventListener('mouseup', upHandler)
    window.addEventListener('mousewheel', wheelHandler)
    window.addEventListener('mousemove', moveHandler)

    const backup = window.oncontextmenu
    window.oncontextmenu = disableRightClick

    return () => {
      window.removeEventListener('mousedown', downHandler)
      window.removeEventListener('mouseup', upHandler)
      window.removeEventListener('mousewheel', wheelHandler)
      window.removeEventListener('mousemove', moveHandler)
      window.oncontextmenu = backup
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { isLeft, isRight, isMiddle, isBtn3, isBtn4, position, wheel }
}
