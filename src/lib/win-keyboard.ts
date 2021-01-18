import { IKeycap } from 'keycap'
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiChevronUp,
} from 'react-icons/fi'
import { RiDivideLine } from 'react-icons/ri'
import { VscArrowLeft } from 'react-icons/vsc'

const keyboard: IKeycap[] = [
  { text: 'Esc', code: 'Escape', size: '1.15', halfHeight: true },
  { text: 'F1', code: 'F1', size: '1.15', halfHeight: true },
  { text: 'F2', code: 'F2', size: '1.15', halfHeight: true },
  { text: 'F3', code: 'F3', size: '1.15', halfHeight: true },
  { text: 'F4', code: 'F4', size: '1.15', halfHeight: true },
  { text: 'F5', code: 'F5', size: '1.15', halfHeight: true },
  { text: 'F6', code: 'F6', size: '1.15', halfHeight: true },
  { text: 'F7', code: 'F7', size: '1.15', halfHeight: true },
  { text: 'F8', code: 'F8', size: '1.15', halfHeight: true },
  { text: 'F9', code: 'F9', size: '1.15', halfHeight: true },
  { text: 'F10', code: 'F10', size: '1.15', halfHeight: true },
  { text: 'F11', code: 'F11', size: '1.15', halfHeight: true },
  { text: 'F12', code: 'F12', size: '1.15', halfHeight: true },
  //
  { text: '`', code: 'Backquote', size: '1' },
  { text: '1', code: 'Digit1', size: '1' },
  { text: '2', code: 'Digit2', size: '1' },
  { text: '3', code: 'Digit3', size: '1' },
  { text: '4', code: 'Digit4', size: '1' },
  { text: '5', code: 'Digit5', size: '1' },
  { text: '6', code: 'Digit6', size: '1' },
  { text: '7', code: 'Digit7', size: '1' },
  { text: '8', code: 'Digit8', size: '1' },
  { text: '9', code: 'Digit9', size: '1' },
  { text: '0', code: 'Digit0', size: '1' },
  { text: '-', code: 'Minus', size: '1' },
  { text: '=', code: 'Equal', size: '1' },
  { text: 'Backspace', code: 'Backspace', size: '2' },
  //
  { text: 'Tab', code: 'Tab', size: '1.5' },
  { text: 'Q', code: 'KeyQ', size: '1' },
  { text: 'W', code: 'KeyW', size: '1' },
  { text: 'E', code: 'KeyE', size: '1' },
  { text: 'R', code: 'KeyR', size: '1' },
  { text: 'T', code: 'KeyT', size: '1' },
  { text: 'Y', code: 'KeyY', size: '1' },
  { text: 'U', code: 'KeyU', size: '1' },
  { text: 'I', code: 'KeyI', size: '1' },
  { text: 'O', code: 'KeyO', size: '1' },
  { text: 'P', code: 'KeyP', size: '1' },
  { text: '[', code: 'BracketLeft', size: '1' },
  { text: ']', code: 'BracketRight', size: '1' },
  { text: '\\', code: 'Backslash', size: '1.5' },
  //
  { text: 'Caps Lock', code: 'CapsLock', size: '1.75' },
  { text: 'A', code: 'KeyA', size: '1' },
  { text: 'S', code: 'KeyS', size: '1' },
  { text: 'D', code: 'KeyD', size: '1' },
  { text: 'F', code: 'KeyF', size: '1' },
  { text: 'G', code: 'KeyG', size: '1' },
  { text: 'H', code: 'KeyH', size: '1' },
  { text: 'J', code: 'KeyJ', size: '1' },
  { text: 'K', code: 'KeyK', size: '1' },
  { text: 'L', code: 'KeyL', size: '1' },
  { text: ';', code: 'Semicolon', size: '1' },
  { text: `'`, code: 'Quote', size: '1' },
  { text: 'Enter', code: 'Enter', size: '2.25' },
  //
  { text: 'Shift', code: 'ShiftLeft', size: '2.25' },
  { text: 'Z', code: 'KeyZ', size: '1' },
  { text: 'X', code: 'KeyX', size: '1' },
  { text: 'C', code: 'KeyC', size: '1' },
  { text: 'V', code: 'KeyV', size: '1' },
  { text: 'B', code: 'KeyB', size: '1' },
  { text: 'N', code: 'KeyN', size: '1' },
  { text: 'M', code: 'KeyM', size: '1' },
  { text: ',', code: 'Comma', size: '1' },
  { text: '.', code: 'Period', size: '1' },
  { text: '/', code: 'Slash', size: '1' },
  { text: 'Shift', code: 'ShiftRight', size: '2.75' },
  //
  { text: 'Ctrl', code: 'ControlLeft', size: '1.25' },
  { text: 'Win', code: 'MetaLeft', size: '1.25' },
  { text: 'Alt', code: 'AltLeft', size: '1.25' },
  { text: 'Space', code: 'Space', size: '7.25' },
  { text: 'Alt', code: 'AltRight', size: '1.25' },
  { text: 'Menu', code: 'ContextMenu', size: '1.25' },
  { text: 'Ctrl', code: 'ControlRight', size: '1.25' },
]

const arrowKey: IKeycap[] = [
  { text: '', size: '1' },
  { text: FiChevronUp({}), code: 'ArrowUp', size: '1' },
  { text: '', size: '1' },
  { text: FiChevronLeft({}), code: 'ArrowLeft', size: '1' },
  { text: FiChevronDown({}), code: 'ArrowDown', size: '1' },
  { text: FiChevronRight({}), code: 'ArrowRight', size: '1' },
]

const extraKey: IKeycap[] = [
  { text: 'NumLK', code: 'NumLock', size: '1' },
  { text: 'ScrLK', code: 'ScrollLock', size: '1' },
  { text: 'Pause', code: 'Pause', size: '1' },
  //
  { text: 'Ins', code: 'Insert', size: '1' },
  { text: 'Home', code: 'Home', size: '1' },
  { text: 'PgUp', code: 'PageUp', size: '1' },
  //
  { text: 'Del', code: 'Delete', size: '1' },
  { text: 'End', code: 'End', size: '1' },
  { text: 'PgDn', code: 'PageDown', size: '1' },
]

const numpad: IKeycap[] = [
  { text: 'AC', code: 'Delete', size: '1.5' },
  { text: VscArrowLeft({}), code: 'Backspace', size: '1.5' },
  { text: RiDivideLine({}), code: 'NumpadDivide', size: '1' },
  //
  { text: '7', code: 'Numpad7', size: '1' },
  { text: '8', code: 'Numpad8', size: '1' },
  { text: '9', code: 'Numpad9', size: '1' },
  { text: 'x', code: 'NumpadMultiply', size: '1' },
  //
  { text: '4', code: 'Numpad4', size: '1' },
  { text: '5', code: 'Numpad5', size: '1' },
  { text: '6', code: 'Numpad6', size: '1' },
  { text: '-', code: 'NumpadSubtract', size: '1' },
  //
  { text: '1', code: 'Numpad1', size: '1' },
  { text: '2', code: 'Numpad2', size: '1' },
  { text: '3', code: 'Numpad3', size: '1' },
  { text: '+', code: 'NumpadAdd', size: '1' },
  //
  { text: '0', code: 'Numpad0', size: '2.25' },
  { text: '.', code: 'NumpadDecimal', size: '1' },
  { text: '=', code: 'NumpadEnter', size: '1' },
]

export const win = {
  keyboard,
  arrowKey,
  extraKey,
  numpad,
}
