import { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CheckPage } from '@pages'

function App() {
  // This effect is for debug only!
  useEffect(() => {
    const handler = ({ code }: KeyboardEvent) => console.log(code)
    const focus = () => console.log('focus!')
    const blur = () => console.log('blur!')
    window.addEventListener('keydown', handler)
    window.addEventListener('focus', focus)
    window.addEventListener('blur', blur)
    return () => {
      window.removeEventListener('keydown', handler)
      window.removeEventListener('focus', focus)
      window.removeEventListener('blur', blur)
    }
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/check/keyboard" component={CheckPage.Keyboard} />
        <Route path="/check/mouse" component={CheckPage.Mouse} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
