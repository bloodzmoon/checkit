import { useState, useEffect } from 'react'

/**
 * Custom hooks for add event keyboard listener to your
 * web application
 *
 * @param key Keyboard code name e.g. Esc is `Escape`
 * @param callback Function to execute when you release the key
 */
export function useKeyPress(
  key: string | undefined,
  callback?: () => void | undefined
) {
  const [keyPressed, setKeyPressed] = useState<boolean>(false)

  const downHandler = (e: KeyboardEvent) => {
    if (e.code === key) {
      setKeyPressed(true)
    }
    if (preventDefaultKeys.includes(e.code)) {
      e.preventDefault()
    }
  }

  const upHandler = (e: KeyboardEvent) => {
    if (e.code === key) {
      setKeyPressed(false)
    }
    if (preventDefaultKeys.includes(e.code)) {
      e.preventDefault()
    }
    if (callback) callback()
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return keyPressed
}

const preventDefaultKeys = [
  'Tab',
  'MetaLeft',
  'MetaRight',
  'AltLeft',
  'AltRight',
  'ContextMenu',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
]
