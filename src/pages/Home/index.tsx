import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { FaRegKeyboard } from 'react-icons/fa'
import { CgMouse } from 'react-icons/cg'

const menus = [
  {
    text: 'Keyboard',
    icon: <FaRegKeyboard size="96" />,
    to: '/check/keyboard',
  },
  { text: 'Mouse', icon: <CgMouse size="96" />, to: '/check/mouse' },
]

export function HomePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>{`<Check it! />`}</header>
      <div className={styles.menu}>
        {menus.map((item) => (
          <Link className={styles.item} to={item.to}>
            {item.icon}
            <br />
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  )
}
