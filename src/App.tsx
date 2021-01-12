import { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CheckPage } from '@pages'

function App() {
  // This effect is for debug only!
  useEffect(() => {
    const handler = ({ code }: KeyboardEvent) => console.log(code)
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CheckPage.Keyboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
